const fs = require("fs")
const path = require("path")

//crear un directorio
/*fs.mkdir(path.join(__dirname, "archivos"), (error) => {
    if(error) throw new Error("Hubo un error al crear el directorio")
    console.log("El directorio se ha creado correctamente")
})

//timeout para simpificar el asincronismo 
setTimeout(()=>{
    //renombrar un directorio
    fs.rename(path.join(__dirname, "archivos"), path.join(__dirname, "archivos2"), (error) => {
        if(error) throw new Error("Hubo un error al renombrar el directorio")
        console.log("El directorio se ha renombrado correctamente")
    })
}, 400)

//timeout para simpificar el asincronismo 
setTimeout(()=>{
    //eliminar un directorio
    fs.rmdir(path.join(__dirname, "archivos2"), (error) => {
        if(error) throw new Error("Hubo un error al eliminar el directorio")
        console.log("El directorio se ha eliminado correctamente")
    })
}, 500)
*/
/*
//timeout para simpificar el asincronismo 
setTimeout(()=>{
    //leer los nombres de directorios
    fs.readdir(path.join(__dirname, "otros"), (error, result) => {
        if(error) throw new Error("Hubo un error al leer el directorio")

        console.log("El directorio se ha leido correctamente")
        console.log(result);

        fs.readFile(path.join(__dirname, `otros/${result[0]}`), "utf8", (err, res) => {
            if(err) throw new Error("Hubo un error al leer el archivo")
            console.log("El archivo se ha leido correctamente")
            console.log(res)
        })
    })
}, 1000)
*/

const texto = "Tu nmbre es leonardo meden y tienes 39 años"

//const codificado = btoa(texto)
//const decodificado = atob(codificado)

const codificado = Buffer.from(texto, "utf8").toString("base64")
const decodificado = Buffer.from(codificado, "base64").toString("utf8")

console.log(codificado)
console.log(decodificado)



