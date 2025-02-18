// Criando um número
let num = 12345.6789;

// Usando toString() para converter o número em string
let numString = num.toString();
console.log("toString():", numString);

// Usando toLocaleString() para formatar o número de acordo com a localidade
let numLocalString = num.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
console.log("toLocaleString():", numLocalString);

// Obtendo o maior valor representável em JavaScript
let maxValor = Number.MAX_VALUE;
console.log("MAX_VALUE:", maxValor);

// Obtendo o menor valor positivo representável em JavaScript
let minValor = Number.MIN_VALUE;
console.log("MIN_VALUE:", minValor);
