//Exercicio 04- Arrays
const Nomes = [
    'Joaquim', 'José', 'Silva', 'Xavier'
];
console.log (Nomes)

//Inserrir nomes
const Nomes1 = ['Joaquim', 'José', 'Silva', 'Xavier'];
let y = Nomes1.unshift('Amanda'); 
console.shift(`Amanda acabou de entrar: ${Nomes1[0]}`);
console.log(y)
console.log (Nomes);

//tirar nomes
const Nomes2 = ['Joaquim', 'José', 'Silva', 'Xavier'];
let x = Nomes2.pop('Xavier'); // x = 4
console.log(`Xavier acabou de sair: ${Nomes2[4]}`);
//console.log(x);

//Inserrir nomes
const Nomes3 = ['Joaquim', 'José', 'Silva', 'Xavier'];
let z = Nomes3.unshift('Zuleica'); 
console.log(`Zuleica acabou de entrar: ${Nomes3[4]}`);
console.log(z);
console.log = Nomes3;

//tirar nomes
const Nomes4 = ['Joaquim', 'José', 'Silva', 'Xavier'];
let a = Nomes4.pop('Amanda'); 
console.log (Nomes);
//console.log(a);

//tirar nomes
const Nomes5 = ['Joaquim', 'José', 'Silva', 'Xavier'];
let b = Nomes5.pop('Silva'); // x = 3
console.log(`silva acabou de sair: ${Nomes5[3]}`);
console.log(b);

//Inserrir nomes
const Nomes6 = ['Joaquim', 'José', 'Silva', 'Xavier'];
let c = Nomes6.unshift('Silvana'); 
console.log(`Silvana acabou de entrar: ${Nomes6[3]}`);
console.log(c);

//Template string

