let arr = [4, 5, 10, 20, 35, 4, 5]

console.log(arr.lastIndexOf(5)) //6

console.log(arr.includes(78)) //false

console.log(arr.find(function(el){
    return el > 10

})) //20, 35

console.log(arr.findIndex(10)) //2

