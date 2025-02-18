// Exemplo de replace()
let texto1 = "Olá, mundo!";
let novoTexto1 = texto1.replace("mundo", "JavaScript");
console.log(novoTexto1); // Saída: "Olá, JavaScript!"

// Exemplo de replaceAll()
let texto2 = "banana, maçã, banana";
let novoTexto2 = texto2.replaceAll("banana", "laranja");
console.log(novoTexto2); // Saída: "laranja, maçã, laranja"

// Exemplo de indexOf()
let texto3 = "JavaScript é incrível!";
let indice1 = texto3.indexOf("é");
console.log(indice1); // Saída: posição do primeiro "é"

// Exemplo de lastIndexOf()
let texto4 = "Vamos aprender JavaScript, porque JavaScript é ótimo!";
let indice2 = texto4.lastIndexOf("JavaScript");
console.log(indice2); // Saída: posição do último "JavaScript"

// Exemplo de includes()
let texto5 = "Estudar programação é essencial!";
let contem = texto5.includes("programação");
console.log(contem); // Saída: true

// Exemplo de slice()
let texto6 = "Aprender JavaScript";
let parte1 = texto6.slice(9, 19);
console.log(parte1); // Saída: "JavaScript"

// Exemplo de substring()
let texto7 = "Desenvolvimento Web";
let parte2 = texto7.substring(0, 12);
console.log(parte2); // Saída: "Desenvolvimento"

// Exemplo de toLowerCase()
let texto8 = "JavaScript É PODEROSO!";
let minusculo = texto8.toLowerCase();
console.log(minusculo); // Saída: "javascript é poderoso!"

// Exemplo de toUpperCase()
let texto9 = "aprendendo javascript";
let maiusculo = texto9.toUpperCase();
console.log(maiusculo); // Saída: "APRENDENDO JAVASCRIPT"
