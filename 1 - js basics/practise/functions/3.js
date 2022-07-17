//a function flips a coin
function flipacoin() {
  let coin = 0;
  coin = Math.floor(Math.random() * 10 ) + 1;   // generates random numbers
  if (coin <= 5) {
    console.log("true")
  } else {
    console.log("false")
  }
}

flipacoin();