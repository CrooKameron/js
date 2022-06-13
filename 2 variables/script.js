///////////////////////// variables ////////////////////////////////////

//         >>variable rules<<
//         cant use special chars 
//         cant use space 
//         cant use extraction symbol '-'
//         cant start with number

var variableone = 5000;
var variabletwo = 6000;



var variablethree = 1.3,
    variablefour = 1.6;


console.log(variableone * variablethree);
console.log(variabletwo * variablefour);











///////////////////////// variable types ///////////////////////////////

var productnamevar = "iphone 13";       // string
var productpricevar = 15000;            // number

let productnamelet = "iphone 13";       // string
let productpricelet = 15000;            // number

console.log(typeof productnamevar);
console.log(typeof productpricevar);
console.log(typeof productnamelet);
console.log(typeof productpricelet);
//           ^
//         typeof command prints the class type of variable




// lets say we have random variables and we want to mathematicly addition them
let number1 = "20";
let number2 = 10;
console.log(Number(number1) + number2)
//           ^
//        converts any type of variable to number  *similar to convert.toint from c#



// also lets say we have random variables and we want to merge them
let number3 = "20";
let number4 = 10; //          v converts any type of variable to string
console.log(number3 + number4.toString())
//                                    ^
//                                   also dont forget to add the brackets if you dont use them code will not work


// thats a example of how normal merge code works
let name = "deniz";
let surname = "yıldız";
console.log(name + " " + surname)



// this is a simple exam passed or failed algorithm
let examnote = 70;
let passedorfailed = (examnote >= 50) // in this line we made a code that if examnote variable is bigger than 50 the other variable passedorfailed  will get true value. otherwise if examnote is smaller than 50 it will get false value
console.log(passedorfailed)
console.log(typeof passedorfailed)



// and thats what happens when you indentify a variable and dont assign any value to it
let age;
console.log(age);
console.log(typeof age); //important note: if you assign ="" or =" " it wont get the value of unassigned