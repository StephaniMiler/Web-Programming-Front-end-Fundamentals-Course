/*
A função pode receber um ou mais valores
Deve retornar um único número
Deve gerar um erro se receber um parâmetro não número
Deve retornar zero caso não receba nenhum parâmetro
*/

(function(){
    function calculaMedia(){
        let total = 0;
        let qtd = arguments.length;

        for(let i=0; i<qtd; i++){
            if(typeof arguments[i] !== "number"){
                throw Error("Only numbers")
            }
            total += arguments[i]
        }
        return total / qtd || 0
    }

    let media = calculaMedia(2, 4, 7, 6)
    console.log(media)
})()