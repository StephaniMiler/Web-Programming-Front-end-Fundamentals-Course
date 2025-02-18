let frase = "JavaScript é incrível!";

// Verifica se a string começa com "Java"
let comecaComJava = frase.startsWith("Java");
console.log(`A frase começa com "Java"? ${comecaComJava}`); // true

// Verifica se a string termina com "incrível!"
let terminaComIncrivel = frase.endsWith("incrível!");
console.log(`A frase termina com "incrível!"? ${terminaComIncrivel}`); // true

// Obtém o caractere na posição 5
let caractereNaPosicao5 = frase.charAt(5);
console.log(`O caractere na posição 5 é: "${caractereNaPosicao5}"`); // "c"

// Divide a string em palavras
let palavras = frase.split(" ");
console.log("Palavras na frase:", palavras);
// ["JavaScript", "é", "incrível!"]
