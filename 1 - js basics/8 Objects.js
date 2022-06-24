var output;

let user1 = { // creating a new object
  "name":"sadık",
  "surname":"turan",
  "age":63,
  "adress":{               ////// you can create objects inside another object like that you can do the same thing on arrays
    "city":"paris",        /////
    "country":"italy",     ////
    "street":"20502.st"    ///
  },                       //
  "hobies":["item1","item2","item3","item4"] // you can also put arrays inside objects
  
}

let user2 = {
  "name":"ahmet",
  "surname":"kaya",
  "age":69,
  "adress":{              
    "city":"hakkari",       
    "country":"kurdistan",    
    "street":"allah.sk"   
  },                      
  "hobies":["item1","item2","item3","item4"] 
  
}


// "var output = var3[2]" you CAN'T use this build for Objects.
output = user1; // you can see the whole content inside the object by simply typing the variable name

output = user1.name;        //
output = user1.surname;     // thats how you can print objects
output = user1["adress"];   //

output = user1.adress.street;  // and thats how you print the object inside another object

output = user1.hobies[2];  // this is how you can print arrays inside objects


let users = [ // putting objects inside an array
  user1,
  user2
];

output = users[1];       // printing the objects inside array
output = users[1].age;             // printing the items inside object that inside of an array
output = users[1].adress.country;  // i dont think i need to explain what this does.. just read the line above


//////////// basic example of objects inside array
let products = [
  {
    "product_name":"s22 ultra",
    "product_price":27400
  },
  {
    "product_name":"Note10+",
    "product_price":16299
  }
]
output = products[0];                
output = products[0].product_name;
///////////






console.log(typeof(output));
console.log(output);