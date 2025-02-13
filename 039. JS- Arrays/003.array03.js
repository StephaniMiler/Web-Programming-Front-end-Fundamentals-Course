let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

console.log(arr1.toString()) //"1,2,3"

console.log(arr1.join(" - "))  //1 - 2 - 3

let arr3 = arr1.concat(arr2, 7, 8, 9) //1, 2, 3, 4, 5, 6, 7, 8, 9