// Exemplo de toPrecision()
let numPrecision = 123.456;
console.log(numPrecision.toPrecision(4)); // "123.5" (arredonda para 4 dígitos no total)
console.log(numPrecision.toPrecision(6)); // "123.456" (mantém os 6 dígitos no total)

// Exemplo de toFixed()
let numFixed = 123.456;
console.log(numFixed.toFixed(2)); // "123.46" (arredonda para 2 casas decimais)
console.log(numFixed.toFixed(0)); // "123" (sem casas decimais, arredonda para inteiro)

// Exemplo de toExponential()
let numExponential = 123.456;
console.log(numExponential.toExponential(2)); // "1.23e+2" (notação científica com 2 casas decimais)
console.log(numExponential.toExponential(4)); // "1.2346e+2" (notação científica com 4 casas decimais)

// Exemplo de NaN (Not a Number)
let notANumber = parseInt("abc");
console.log(notANumber); // NaN
console.log(isNaN(notANumber)); // true (verifica se é NaN)

let invalidOperation = 0 / 0;
console.log(invalidOperation); // NaN