// valueOf(): Retorna o valor primitivo da string
let texto = new String("Olá, mundo!");
console.log(texto.valueOf()); // "Olá, mundo!"

// trim(): Remove espaços em branco no início e no fim da string
let espacos = "   Texto com espaços   ";
console.log(espacos.trim()); // "Texto com espaços"

// padStart(): Preenche a string no início até atingir um determinado comprimento
let numero = "42";
console.log(numero.padStart(5, "0")); // "00042"

// padEnd(): Preenche a string no final até atingir um determinado comprimento
let codigo = "ABC";
console.log(codigo.padEnd(6, "-")); // "ABC---"
