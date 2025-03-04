/*
IMC = Peso / Altura ** 2
Deve receber peso, altura e uma função callback (opcional)
Deve gerar um erro se receber parâmetro não número
Deve retornar erro caso não receba dois parâmetros
Deve retornar a classificação do IMC:

Muito abaixo do peso 16 a 16,9 kg/m2
Abaixo do peso 17 a 18,4 kg/m2
Peso normal 18,5 a 24,9 kg/m2
Acima do peso 25 a 29,9 kg/m2
Obesidade Grau I 30 a 34,9 kg/m2
Obesidade Grau II 35 a 40 kg/m2
Obesidade Grau III maior que 40 kg/m2
*/

function CalcularIMC(peso, altura, callback) {
    if(peso === undefined || altura === undefined){
        throw Error("Need two parameters: weight and height")
    }
    let imc =  peso / (altura ** 2)
    if(typeof callback === "function"){
        return callback(imc)
    }
    return imc
}

function classificaIMC(imc){
    if(imc <= 16.9){
        return 'Muito abaixo do peso 16 a 16,9 kg/m2'
    }else if(imc <= 18.4){
        return 'Abaixo do peso 17 a 18,4 kg/m2'
    }else if(imc <= 24.9){
        return 'Peso normal 18,5 a 24,9 kg/m2'
    }else if(imc <= 29.9){
        return 'Acima do peso 25 a 29,9 kg/m2'
    }else if(imc <= 34.9){
        return 'Obesidade Grau I 30 a 34,9 kg/m2'
    }else if(imc <= 40.0){
        return 'Obesidade Grau II 35 a 40 kg/m'
    }else{
        return 'Obesidade Grau III maior que 40 kg/m2'
    }
}

let imc = CalcularIMC(60, 1.50)
let imc2 = CalcularIMC(60, 1.50, classificaIMC)

console.log(imc)
console.log(imc2)


