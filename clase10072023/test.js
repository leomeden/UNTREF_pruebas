const numeroAleatorio = Math.random();
console.log(numeroAleatorio);

const numeroAleatorioEntero = Math.floor(numeroAleatorio*1000000);
console.log(numeroAleatorioEntero);

const crypto = require('crypto');
const uuID = crypto.randomUUID();
const uuIDFormateado = uuID.replaceAll('-', '');
console.log(uuIDFormateado);