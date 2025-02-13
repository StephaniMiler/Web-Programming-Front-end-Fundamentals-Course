// PROTOTYPE - Permite adicionar métodos a objetos existentes
function Animal(nome) {
    this.nome = nome;
}

Animal.prototype.falar = function() {
    console.log(`${this.nome} faz um som.`);
};

let cachorro = new Animal("Rex");
cachorro.falar(); // Rex faz um som.


// CALL - Chama uma função com um contexto (this) específico
let pessoa = {
    nome: "Alice",
    saudacao: function(cumprimento) {
        console.log(`${cumprimento}, meu nome é ${this.nome}.`);
    }
};

let outraPessoa = { nome: "Carlos" };
pessoa.saudacao.call(outraPessoa, "Olá"); // Olá, meu nome é Carlos.


// APPLY - Igual ao call, mas os argumentos são passados em um array
pessoa.saudacao.apply(outraPessoa, ["Oi"]); // Oi, meu nome é Carlos.
