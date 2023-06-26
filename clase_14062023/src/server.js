const express = require("express");
const fs = require("fs")
const path = require ('path')

const server = express();
const PORT = 8080;
const HOST = "192.168.1.14";

function escribirArchivo(contenido){
    return new Promise((res,rej)=>{
        fs.writeFile( path.join(__dirname, "demo.txt" ), contenido , "utf8", (error) =>{
            if (error) rej (new Error("Hubo un error. No se ha logrado escribir en el archivo"))
        
            console.log("El archivo se ha escrito correctamente")
            res(true)
        })
    })
}

function leerArchivo(){
    return new Promise((res,rej)=>{
        fs.readFile(path.join(__dirname, "demo.txt" ), "utf8", (error, result) =>{
            if (error) rej (new Error("Hubo un error. No se ha logrado leer el archivo"))
        
            console.log("El archivo se ha leido correctamente")
            res(result);
        })
    })
}

server.get('/coche', (request, response) => {
    const { nombre, apellido, edad } = request.query;

    if(!nombre || !apellido || !edad){
        return response.status(400).send("Hubo un error");
    }
    async function procesar(contenido){
        try {
            await escribirArchivo(contenido)
            let resultado = await leerArchivo()
            response.status(200).send(resultado)
        } catch (error) {
            response.status(500).send(error.message);
        }
    }

    procesar(`Tu nmbre es ${nombre} ${apellido} y tienes ${edad} años` )
});

server.listen(PORT, HOST, () => console.log(`Ejecutandose en http://${HOST}:${PORT}`));