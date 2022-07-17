//function that returns the divisors of a number sent to it as an array
function divisor(number) {
  let divisors = []
  for (let i = 0; i < number; i++) {
    if (number % i == 0) {
      divisors.push(i)
    }
  }

 
  for (let j = 0; j < divisors.length; j++) {
    console.log(divisors[j])
  }
  /*
  console.log(divisors)
  */
                                    //
  /*                                //
  return divisors;                  //
  */                                // => 
}                                        // => together
/*                                  // =>
console.log(divisors);              //
*/                                  //

divisor(96)