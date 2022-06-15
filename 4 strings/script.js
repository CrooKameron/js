
let name = "joe",
surname = "mama",
age = 97,
city = "diyarbakır";




let retirement = (65 - age > 0) ? "there are "+(65-age)+" years left for retriment!" : "im already a retired" // ternary operators


let output = `my name is: ${name} and my surname is: ${surname} i live in: ${city} ${retirement}` 

console.log(output);





let variable1 = "LoreM iPsuM dOloR sIt aMeT, ConsEctEtUR aDipiSiCiNg";


output = variable1.toLowerCase();   // converts the all letters to small
output = variable1.toUpperCase();   // converts the all letters to big

output = variable1.length;          // counts the length of the string


output = variable1.slice(0, 6);          /////
output = variable1.slice(4);             //////// .slice() is used for slicing the strings
output = variable1.slice(4);             /////
output = variable1.slice(-10, -6);       /////////////////
//                                                      ///==========>> also both does the same work
output = variable1.substring(0, 6);      /////////////////
output = variable1.substring(4);         ////
output = variable1.substring(-10);       /////// .substring() is used for slicing the strings 
output = variable1.substring(-10, -6);   ////


output = variable1.replace("iPsuM","JOE MAMA HEHEHEH"); // .replace just replaces the word you choose 
output = variable1.replaceAll("s","€"); // .replace just replaces ALL word in the string to you choose 

output = variable1.trim();       // destroys the spaces at the beggining and the end
output = variable1.trimEnd();    // destroys the spaces at the beggining
output = variable1.trimStart();  // destroys the spaces at the end


output = variable1.indexOf("dOloR"); // gets the index number of specifield string (example: "8") 

output = variable1.split(" "); // it breaks apart to the array (similar to "$explode" from php)

output = variable1.split(" ")[4]; // it breaks apart the array AND picks up the choosen number of it



console.log(output);