 let products = ["iphone 12","iphone 13","iphone 13 pro"]; //assigning array variables as string
let prices = [9000, 12000 ,14000]; // same shit but its numbers
let colors = ["black","space blue","gray"]; // same shit but its numbers

var productselection = 1; // in here we can choose the productlsls

////////////////////////////////////////////// printing the selected product name, price and color
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

// or we can just print the whole array list
for (let a = 0; a < products.length; a++) {
  console.log(products[a]);
}
////////////////////////////////////////////

