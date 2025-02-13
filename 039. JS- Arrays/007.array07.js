//Spread Operator
let numeros = [1, 2, 3];
let maisNumeros = [...numeros, 4, 5, 6]; // Copia 'numeros' e adiciona novos elementos

console.log(maisNumeros); // [1, 2, 3, 4, 5, 6]

//Destructuring em Arrays

let numeros2 = [10, 20, 30];

// Extraindo valores para variáveis
let [a, b, c] = numeros2;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

let pessoa = { nome: "João", idade: 25, cidade: "São Paulo" };

// Extraindo valores para variáveis com o mesmo nome das propriedades
let { nome, idade } = pessoa;

console.log(nome); // João
console.log(idade); // 25

