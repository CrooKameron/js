

// the use of loops for arrays

let array1 = [1,3,5,7,93,15,2,9,4];
let result1 = "0";
for (let i = 0; i < array1.length; i++) {
  result1 += array1[i];
}
console.log(result1)




for (let j in array1) {
  console.log(j) // the index numbers of array
}
  

for (let k of array1) {
  console.log(k) // the numbers itself inside array
}

// the use of loops for objects

let object1 = {
  "name":"jeff",
  "username":"kitten_58",
  "password":"ashdaj98127391oıwq",
  "email":"jeff1947@outlook.com"
}

for (let key in object1) {
  console.log(key);             // the key of the items
  console.log(object1[key])     // the items itself 
}
