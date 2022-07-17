let products = ["iphone 12","iphone 13","iphone 13 pro"]; //assigning array variables as string
let prices = [9000, 12000 ,14000]; // same shit but its numbers
let colors = ["black","space blue","gray"]; // same shit but its numbers

var productselection = 1; // in here we can choose the productlsls

////////////////////////////////////////////// printing the selected product name, price and color 1
console.log                      ///////////
(                                /////////
  " product name: " +            ///////
  products[productselection]     ///// 
);                               ////
console.log                      //
(                                //
  " price: " +                   //
  prices[productselection]       //
)                                //
console.log                      //
(                                //
  " Color: " +                   //
   colors[productselection]      //
)                                //
                                 //
///////////////////////////////////


////// printing the selected product name, price and color 2
console.log(`Product name: ${products[productselection]} Price: ${prices[productselection]} Color: ${colors[productselection]} `)
////////////////////////////////////////////////////////////


// or we can just print the whole array list
for (let a = 0; a < products.length; a++) {
  console.log(products[a]);
}
///////////// OR

return products
////////////////////////////////////////////


// also you can define the array all in one
let prod1 = [ 
  "iphone 17",
  18000,
  "red"];

prod1[1] = 19000; // also you can change it easily whenever you want


console.log(prod1)
 

////////////////////// ARRAY METHODS //////////////////////

let output;
let students = ["çınar","deniz","ada"];


output = students.indexOf("deniz");// basicly finds the  item in array
output = students.includes("deniz");// asks if the array contains specifield item (thats also a boolean operator)

students.sort();    // sorts the array a to z
students.reverse(); // sorts the array z to a

output = students.toString(); // converts the array to string
output = students.join(" ");  // converts to string but replaces the "," with whatever you type in the ""



/*
output = students.pop();      // deletes the last item from array and brings it 
output = students.shift();    // deletes the first item from array and brings it
*/

console.log(output);


output = students.push("sena");       // adding items to array (end of it)         // also both does assigns the sort number of which order they added the item
output = students.unshift("ahmet");   // adding items to array (at the starting)   //


let var1 = ["mazda","toyota"];
let var2 = ["opel","renault"];
let var3 = ["volvo","mercedes"];

output = var1.concat(var2);       // merges the items of arrays (doesnt effect the original array)
output = var1.concat(var2,var3);  // you can also merge multiple arrays

//gets the deleted item value
//  v                v v  
//  v                from where and to where
//  v                v v  
//  v                v v  and in this area we add item or items to array
//  v                v v  //          //
output = var1.splice(0,1, "honda","bmw"); // from 0 deletes 1 item and adds 2 items

output = var1.splice(0,1); // you basicly dont have to add item or items every time


console.log(students); 
console.log(typeof(output));
console.log(output);  
console.log(var1);  
