const arr = [1, 5, 10, "ola", true]

const arr2 = [1, 2, 3, 4, 5]

let sohNumeros = arr.every(function(el) {
    return typeof el === "number"
})

let temNumeros = arr.some(function(el) {
    return typeof el === "number"
})

arr.filter(function(el, i, _arr){
   /* console.log(el)
    console.log(i)
    console.log(_arr)*/
    return typeof el === "number"
})

arr.forEach(function(el, i, _arr){
    console.log(i, ": ", el)
})


arr2.map(function(el, i, _arr){
    return el * el
})


console.log(sohNumeros)
console.log(temNumeros)
