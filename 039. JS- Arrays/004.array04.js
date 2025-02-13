let numeros = [1, 2, 3];
numeros.push(4); // Adiciona ao final
console.log(numeros); // [1, 2, 3, 4]

let letras = ['a', 'b', 'c'];
let ultimaLetra = letras.pop(); // Remove o último
console.log(letras); // ['a', 'b']
console.log(ultimaLetra); // 'c'

let frutas = ['maçã', 'banana', 'uva'];
let primeiraFruta = frutas.shift(); // Remove o primeiro
console.log(frutas); // ['banana', 'uva']
console.log(primeiraFruta); // 'maçã'

let cores = ['vermelho', 'azul'];
cores.unshift('verde'); // Adiciona no início
console.log(cores); // ['verde', 'vermelho', 'azul']

let animais = ['cachorro', 'gato', 'pássaro', 'peixe'];
let domesticos = animais.slice(0, 2); // Cópia de parte do array
console.log(domesticos); // ['cachorro', 'gato']
console.log(animais); // ['cachorro', 'gato', 'pássaro', 'peixe']

let numeros2 = [10, 20, 30, 40, 50];
numeros2.splice(1, 2, 15, 25); // Remove 2 elementos a partir do índice 1 e adiciona novos
console.log(numeros2); // [10, 15, 25, 40, 50]



