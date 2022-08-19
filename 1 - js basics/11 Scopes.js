var name = "ahmet";

const adress = "istanbul"; // const variables are unchangeable 
adress = "izmir"; // if you try to chnage a const variable you'll get error 

function func1() { //  if functions cant find used variables inside itself it uses the global variables 
  var name = "ayşe";
  console.log(name);
}

if (true) {
  let gender = "attack chopper"; // let variables are only can useable inside blocks
  var name = "zeynep";
  console.log(name, gender)
}
console.log(gender); // like you can see if you try to use let variables that defined anc created in another block you will get error


//you cant create a new scope in a block (let,const)
//functions creates their own scope zones

func1(); 