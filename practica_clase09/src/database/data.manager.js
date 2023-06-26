const fs = require("fs");
const path = require("path");

const route = path.join(__dirname, "data.json");

function write(content){
    return new Promise((res, rej) =>{
        fs.writeFile(route, JSON.stringify(content, null, "\t"), "utf8", (err) => {
            if (err) {
                rej(new Error("Error. No se pudo escribir"))
            } 
            res(true);
        });
        
    });
}

function read(){
    return new Promise((res, rej) =>{
        fs.readFile(route, "utf8", (err, content) => {
            if (err) rej(new Error("Error. No se pudo leer"))
            
            res(JSON.parse(content))
        });
    });
}

function generateId(products){
    let maxId = 0;
    products.forEach(el => {
        if (el.id > maxId ) {
            maxId = el.id;
        }
    });
    return maxId + 1
}

async function findAll(){
    const products = await read();
    return products;
}

async function findOneById(id){
    if (!id) throw new Error('Error. Id no definido')
    const products = await read();
    const product = products.find((el) => el.id === id);
    if (!product) throw new Error('Error. No hay ningun producto con ese Id.')

    return product
}

async function create(product){
    if(!product.nombre || !product.marca || !product.precio || !product.stock ) throw new Error("Error. Datos incompletos")
    const products = await read();
    const prodConId = { id: generateId(products), ...product }
    
    products.push(prodConId)

    await write(products)
    
    return prodConId;
}

async function update(product){
    if (!product.id || !product.nombre || !product.marca || !product.precio || !product.stock ) throw new Error("Error. Datos incompletos")
    const products = await read();
    const index = products.findIndex((el) => el.id === product.id);

    products[index] = product
    await write(products)

    return product
}

async function destroy(id){
    if (!id ) throw new Error('Error. Id no definido')
    const products = await read();
    const product = products.find((el) => el.id === id);
    const index = products.findIndex((el) => el.id === id);

    if (index === -1) throw new Error('Error. No hay ningun producto con ese Id.')

    products.splice(index, 1)

    await write(products)

    return product
}



module.exports = { findAll, findOneById, create, update, destroy }