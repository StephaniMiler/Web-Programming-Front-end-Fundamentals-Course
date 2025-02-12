function fn(cb){
    console.log("executar ação de callback")
    console.log(typeof cb)
    typeofcb == "function" && cb()
}

fn(function(){
    console.log("função passada por parâmetro")
})


function fn3(){
    return function _fn3(){
        console.log("Função retornada por parâmetro")
    }
}

fn3.count = 0

const funcao3 = fn3()
funcao3()
console.log(fn3.count)