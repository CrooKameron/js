     let output;


output = "10";
output = Number(output);  //converts the string to number


output = parseFloat("10.621"); // converts the number to demical number (10.261)
output = parseInt("10.621");   //converts the number to integer         (10)
output = parseInt("a10.621");  //assings NaN(not a number) error if variation doesnt include any number or includes any letters


output = isNaN("2"); // asks if the variation or integer is number or not nan(not a number) |false=its a number|  |true=its not a number|


let number = 51.8916153;
output = number.toPrecision(3); // changes the whole digit length of the number (it also converts to string)
output = number.toFixed(3);     // changes the digit length of the number after "."

output = Math.round(2.4); // it just basicly rounds the number
output = Math.ceil(2.1);  // always rolls the number to bigger 
output = Math.floor(2.8); // always rolls the number to lower 
output = Math.sqrt(36);   // takes the square root 
output = Math.abs(-51);   // converts to positive number  
output = Math.min(45,7,12,92,15);   // finds the minimum value   
output = Math.max(45,7,12,92,15);   // finds the maximum value   
output = Math.floor(Math.random() * 100 ) + 1;   // generates random numbers



console.log(typeof(output));
console.log(output);