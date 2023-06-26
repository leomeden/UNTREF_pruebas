const { log } = require('console')
const fs = require('fs')
const path = require ('path')

let primerContenido = "Hola Mundo desde un archivo TXT 2\nBienvenidos"
let segundoContenido = "\nBuenas Noches"

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

function agregarAlArchivo(contenido){
    return new Promise((res,rej)=>{
        fs.appendFile( path.join(__dirname, "demo.txt" ), contenido , "utf8", (error) =>{
            if (error) rej(new Error("Hubo un error. No se ha logrado agregar en el archivo"))
        
            console.log("El contenido se ha escrito correctamente")
            res(true)
        })
    })
}

function eliminarArchivo(){
    return new Promise((res,rej)=>{
        fs.unlink( path.join(__dirname, "demo.txt" ), (error) =>{
            if (error) rej (new Error("Hubo un error. No se ha logrado eliminar el archivo"))
        
            console.log("El archivo se ha eliminado correctamente")
            res(true)
        })
    })
}

async function probar(){
    try {
        /*await escribirArchivo(primerContenido)
        let resultado1 = await leerArchivo()
        console.log(resultado1)
        await agregarAlArchivo(segundoContenido)
        let resultado2 = await leerArchivo()
        console.log(resultado2)*/
        eliminarArchivo()
    } catch (error) {
        console.log(error.message)
    }
}

probar()
