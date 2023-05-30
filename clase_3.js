/*function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad =edad;

    this.saludar = function() {
        console.log(`Holaa. Soy ${this.nombre}`)
    }
}*/
/*

class Persona {
    #nombre;  // # propiedad privada
    #edad;

    constructor(nombre, edad, numeroFavorito) {
        //Propiedades Privadas
        this.#nombre = nombre;
        this.#edad = edad;
        //Propiedades Publicas
        this.numeroFavorito = numeroFavorito;
        this.otra = 0;

    }

    saludar = function() {
        console.log(`Holaa. Soy ${this.#nombre}`)
    }
    
    //metodo static no necesito crear un objeto para instanciarla
    static sumar(a,b) {
        console.log(a+b);
    }
    
    //getters y setters
    getNombre() {return this.#nombre;}
    setNombre(nombre) {this.#nombre = nombre;}

    getEdad() {return this.#edad;}
    setEdad(edad) {this.#edad = edad;}
    
    
    //Se recomienda que todas las propiedades sean privadas
    //Y los metodos pueden ser publicos o privados

    //Se puede crear una instancia de una clase mediante un metodo estatico
    //Pero esto probablemente no lo veamos en el curso

}

const juan = new Persona("Juan", 20);
juan.setNombre("Pablo");
console.log(juan.nombre);
juan.saludar();
console.log(juan);

const lorena = new Persona("Lorena", 25);
console.log(lorena);

Persona.sumar(2, 5);
*/


//Temporizadores
/*
let contador = 1
const cronometro = setInterval(() => {
    console.log(contador);
    if (contador === 3) {
        clearInterval(cronometro);
    }
    contador++
}, 1000);
*/
/*
console.log("Procesando....");
const esperar = setTimeout(() => {
    console.log("Hola camada 2");
}, 3000);
*/

// callbacks
/*
function sumar(a, b){
    // si quisiera buscar datos a una BD o una API
    let resultado = 0;
    setTimeout(() => {
       resultado = a + b;
    }, 1000);
    return resultado;
}
// me devuelve antes de resolver el setTimout
console.log(sumar(10, 5));*/

/*const p = new Promise((resolve,reject) => {

});*/
/*
function sumar(a, b){
    // si quisiera buscar datos a una BD o una API
    let resultado = 0;
    setTimeout(() => {
       return a + b;
    }, 1000);
    return resultado;
}

console.log(sumar(10, 5));
*/
/*
//para corregir esto
function sumar(a, b){
    // si quisiera buscar datos a una BD o una API
    return new Promise((res,rej)=>{
        setTimeout(() => {
            let resultado = a + b;
            resolve (resultado);
         }, 1000);
    })
}

//en este caso me devuelve pending
console.log(sumar(10, 5));
*/

/*
//para corregir esto
function sumar(a, b){
    // si quisiera buscar datos a una BD o una API
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let resultado = a + b;
            resolve(resultado);
         }, 3000);
    })
}

//then / catch / finally
sumar(10, 5).then((resultado) => console.log(resultado))
*/

//para corregir esto
function obtenerNumeroAleatorioMenorQue5(){
    // si quisiera buscar datos a una BD o una API
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            //Math.ceil() redondea para arriba
            const numeroAleatorio = Math.floor(Math.random() * 10);
            
            try {
                if (numeroAleatorio < 5){
                    resolve(numeroAleatorio);
                } else {
                    reject(new Error("El numero aleatorio debe ser menor que 5"));
                }
            } catch (error) {
                console.log(error);
            }
         }, 1000);
    })
}

//then / catch / finally
/*obtenerNumeroAleatorioMenorQue5()
    .then((resultado1) => resultado1 += 1)  //ver bien como funciona esto
    .then((resultado2) => console.log(resultado2))
    .catch((error) => console.log(error.message))
    .finally(() => console.log("Me sigo ejecutando"));
*/
/*
//imprime pending
async function imprimirResultado() {
    console.log(obtenerNumeroAleatorioMenorQue5());
} 

imprimirResultado();
*/

async function imprimirResultado() {
    try {
        let resultado = await obtenerNumeroAleatorioMenorQue5();
        console.log(resultado) ;
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("Me sigo ejecutando");
    }
} 

imprimirResultado();