/*function somar(arr){

    let total = 0

    for(let i=0; i<arr.lenght; i++){
        total+= arr[i]
    }

    return total
}

console.log(somar([1,2,3]))*/

function somar(arr){

    console.log(arguments)
    let total = 0

    for(let i=0; i<arguments.lenght; i++){
        total+= arguments[i]
    }

    return total
}

console.log(somar(1,2,3,4,5))