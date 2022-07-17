function helloworld() {           //
  console.log("hello world");     // creating a function
};                                //

helloworld(); ////// you can use it how you much want, its simple and useful if youre gonna use same code block for multiple times
helloworld(); /////
helloworld(); ////
helloworld(); ///




function helloworld1(msg) {   
  console.log(msg);          
};                           

helloworld1("Hello World");
helloworld1("hello");
helloworld1("hey");
helloworld1(); 


function agecalculator(birthdate) {
   return new Date().getFullYear() - birthdate;
}
let agekris = agecalculator(1985);
let agejohn = agecalculator(1987);


function emekliligekacyilkaldi(birthdate, name) {
    let age = agecalculator(birthdate)
    let yearremains = 65 - age;

  if (yearremains > 0) {
    console.log(`${name}, emekli olmaniza  ${yearremains} yil kaldi`)
  } else {
    yearremains = Math.abs(yearremains);
    console.log(`${name} ,${yearremains} yil once zaten emekli oldunuz`) ////////////
  }
}

emekliligekacyilkaldi(1980,"ali");
emekliligekacyilkaldi(571,"allah");
emekliligekacyilkaldi(4928,"ahmet kaya");