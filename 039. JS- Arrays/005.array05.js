let lista = [1, 2, 3, 4, 5];
lista.reverse(); // Inverte a ordem dos elementos
console.log(lista); // [5, 4, 3, 2, 1]

let valores = [1, 2, 3, 4];
let soma = valores.reduce((acumulador, atual) => acumulador + atual, 0); // Soma os valores
console.log(soma); // 10
