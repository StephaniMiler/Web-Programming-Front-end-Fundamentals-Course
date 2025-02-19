// Exemplo de setTimeout: executa uma vez após 2 segundos
const timeoutId = setTimeout(() => {
    console.log("Executado após 2 segundos");
}, 2000);

// Exemplo de clearTimeout: cancela o timeout antes de executar
const clearTimeoutExample = setTimeout(() => {
    clearTimeout(timeoutId);
    console.log("Timeout cancelado antes de ser executado");
}, 1000);

// Exemplo de setInterval: executa a cada 1 segundo
const intervalId = setInterval(() => {
    console.log("Executando a cada 1 segundo");
}, 1000);

// Exemplo de clearInterval: cancela o intervalo após 5 segundos
const clearIntervalExample = setTimeout(() => {
    clearInterval(intervalId);
    console.log("Intervalo cancelado após 5 segundos");
}, 5000);

// Exemplo adicional de setTimeOut (com erro de digitação corrigido para setTimeout)
const extraTimeout = setTimeout(() => {
    console.log("Exemplo extra de setTimeout");
}, 3000);

// Exemplo adicional de setInterval
const extraInterval = setInterval(() => {
    console.log("Exemplo extra de setInterval");
}, 1500);

// Exemplo de CleartimeOut (corrigido para clearTimeout)
setTimeout(() => {
    clearTimeout(extraTimeout);
    console.log("Extra Timeout cancelado");
}, 2500);

// Exemplo de clearInterval extra
setTimeout(() => {
    clearInterval(extraInterval);
    console.log("Extra Intervalo cancelado");
}, 4500);
