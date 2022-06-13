let result;
let a = 10, b = 20, c=30; 
// arithmetic operators
    result = a + b; 
    result = a - b; 
    result = a * b; 
    result = a / b; 
    result = a % b; 
    result = a++; // first assign the value of a and then add 1 to it
    result = ++a; // first add 1 to a and assign

// assigment operators
    result = a;
    result += a; // result = (result + a)
    result -= a; // result = (result - a)
    result *= a; // result = (result * a)
    result /= a; // result = (result / a)
    result %= a; // result = (result % a)

// comparing operators
    result = (a == b);    // boolean equality query
    result = (a != b);    // boolean equality query but its reversed
    result = (3 === "3"); // it controls the "value and type of the variation" instead of just value  
    result = (3 == "3");  // variations are different, at the example on top "===" it prints false value but in this example it prints true because it ignores the variable type in "==" 
    result = (a > b)
    result = (a <= b)

// logical operators

console.log(result);