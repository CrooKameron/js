//a function that takes a variable number of parameters
function func1() {
  let output = 0;
  
  for (let i = 0; i < arguments.length; i++) {
    output += arguments[i];
  }

 return output
}

console.log(func1(51,15,65,72,73))

