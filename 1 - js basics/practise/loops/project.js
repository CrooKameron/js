let numbers = [1,7,18,15,26,3,25,82];

/*
// every number's square root
for (let i = 0; i < numbers.length; i++) {
  let currentnumber = numbers[i];
  let karekok = currentnumber * currentnumber;
  console.log(karekok)
}
*/

/*
// numbers that can divided by 5
for (let j = 0; j < numbers.length; j++){
  let currentnumber = numbers[j];
  if (currentnumber % 5 == 0) {
    console.log(currentnumber);
  }
}
*/


/*
// gathers up the all odd numbers
let output = 0;

for (let k = 0; k < numbers.length; k++){
  let currentnumber = numbers[k];
  
  if (currentnumber % 2 == 0) {
    output += currentnumber;
  }
}
console.log(output);
*/



let products = ["Iphone12","Samsung s22","Iphone13","Samsung s23"];


/*
// converts all letters to big
for (let l = 0; l < products.length; l++) {
  let currentproduct = products[l].toUpperCase();
  console.log(currentproduct);
}
*/


/*
// tells how many products contains "Samsung" in the array
let output1 = 0;
for (let p = 0; p < products.length; p++) {
  let currentproduct = products[p];
  if (currentproduct.includes("Samsung")) output1++;
}
console.log(output1);
*/


let students = [
  {"name":"yigit", "surname":"bilgi", "scores":[60,70,60]},
  {"name":"arda", "surname":"bilgi", "scores":[10,73,40]},
  {"name":"cinar", "surname":"turan", "scores":[70,70,60]}
];


// just a stupid student & score alg
for (let r = 0; r < students.length; r++) {
  console.log("name & surname: "+students[r].name+" "+students[r].surname);
  let avgscore = 0;
  
      for (let s = 0; s < students[r].scores.length; s++) { // loops for how many scores they have
        avgscore += students[r].scores[s];
      }
      avgscore = avgscore / students[r].scores.length;

  avgscore = avgscore.toFixed(2);
  console.log("average score: "+ avgscore);
  if (avgscore > 50) {
    console.log("status: passed");
  } else {
    console.log("status: failed");
  }
  
  console.log("");
}
