const nome = 'Melany'
let altura = 1.53
let peso = 55

let imc = peso / (altura * altura)
imc = imc.toFixed(1)

// Template string
const resultado = `Meu nome é ${nome} e eu tenho ${1.53} de altura! Meu peso é ${peso} e meu imc é ${imc} `;

console.log(resultado);
