// Criando uma nova data com a data e hora atuais
let dataAtual = new Date();
console.log("Data atual:", dataAtual);

// Criando uma data específica (ano, mês (0 = janeiro), dia, hora, minuto, segundo, milissegundo)
let dataEspecifica = new Date(2024, 1, 18, 12, 30, 45);
console.log("Data específica:", dataEspecifica);

// Obtendo o ano com getFullYear()
console.log("Ano:", dataAtual.getFullYear());

// Obtendo o mês (0 = Janeiro, 11 = Dezembro) com getMonth()
console.log("Mês:", dataAtual.getMonth() + 1); // +1 para exibir de forma correta

// Obtendo o dia do mês com getDate()
console.log("Dia do mês:", dataAtual.getDate());

// Obtendo o dia da semana (0 = Domingo, 6 = Sábado) com getDay()
console.log("Dia da semana:", dataAtual.getDay());

// Obtendo a hora com getHours()
console.log("Hora:", dataAtual.getHours());

// Obtendo os minutos com getMinutes()
console.log("Minutos:", dataAtual.getMinutes());

// Obtendo os segundos com getSeconds()
console.log("Segundos:", dataAtual.getSeconds());

// Obtendo os milissegundos com getMilliseconds()
console.log("Milissegundos:", dataAtual.getMilliseconds());

// Obtendo timestamp (milissegundos desde 01/01/1970) com getTime()
console.log("Timestamp:", dataAtual.getTime());

// Convertendo a data para string padrão com toString()
console.log("Data como string:", dataAtual.toString());

// Convertendo para formato local com toLocaleString()
console.log("Data formatada (pt-BR):", dataAtual.toLocaleString('pt-BR'));

// Configurando uma nova data com setFullYear()
dataAtual.setFullYear(2030);
console.log("Nova data com ano alterado:", dataAtual);
