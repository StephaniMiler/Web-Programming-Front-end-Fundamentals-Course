let telefone1 = "91234-2345"; // "9****-**45"
let telefone2 = "1234-2345";  // "1***-**45"

function maskTel(number) {
    let hifemPos = number.indexOf("-"); // Corrigido de 'numero' para 'number'
    let numeroInicio = number.slice(0, hifemPos);
    let numeroFinal = number.slice(hifemPos + 1);
    let doisUltimos = numeroFinal.slice(-2);

    return `${numeroInicio[0].padEnd(numeroInicio.length, "*")}-${doisUltimos.padStart(numeroFinal.length, "*")}`;
}

console.log(maskTel(telefone1)); // "9****-**45"
console.log(maskTel(telefone2)); // "1***-**45"
