var name = "ahmet";

function func1() { // functions first looks for the variables if it cant find used variables inside itself it uses the global variables 
  var name = "ayşe";
  console.log(name);
}

func1();
