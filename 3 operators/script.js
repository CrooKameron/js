let result;
let a = 10, b = 20, c=30; 
// arithmetic operators //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    result = a + b; 
    result = a - b; 
    result = a * b; 
    result = a / b; 
    result = a % b; 
    result = a++; // first assign the value of a and then add 1 to it
    result = ++a; // first add 1 to a and assign
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// assigment operators //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    result = a;
    result += a; // result = (result + a)
    result -= a; // result = (result - a)
    result *= a; // result = (result * a)
    result /= a; // result = (result / a)
    result %= a; // result = (result % a)
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^




// comparing operators //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    result = (a == b);    // boolean equality query
    result = (a != b);    // boolean equality query but its reversed
    result = (3 === "3"); // it controls the "value and type of the variation" instead of just value  
    result = (3 == "3");  // variations are different, at the example on top "===" it prints false value but in this example it prints true because it ignores the variable type in "==" 
    result = (a > b)
    result = (a <= b)
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^




// logical operators //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

    // thats a example of boolean login algorithm
        let username = "denizyildiz",
            password = "12345";

        var isusernametrue = (username == "denizyildiz");   // thats where we do the authentication
        var ispasswordtrue = (password == "12345");         //

        if (isusernametrue) // (variable) and (variable == TRUE) does same work
        { 
            if (ispasswordtrue) {
                console.log("Logged in!")
            }
            else 
            {
                console.log("incorrect password!")
            }
        } 
        else if (!isusernametrue) // (!variable) and (variable == FALSE) does same work
        { 
            console.log("incorrect username failed");
        }
    //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


    
    // this is without boolean 
        let username1 = "kris",
            password1 = "1234";

        if (username1 == "kris")    /////////// \\\
        {                                        // thats where we do the authentication 
            if (password1 == "1234")   /////// ///
            {
                console.log("logged in!");
            }

            else 
            {
                console.log("incorrect password");
            }
        } 

        else 
        {
            console.log("incorrect username");
        }
    //^^^^^^^^^^^^^^^^^^^^^^^



    // now heres a driving lisence test
        var age = 20,
            graduationstatus = "university";
        
        if (age >= 18 && (graduationstatus == "highschool" || graduationstatus == "university")) // here is an example of important if build (the use of "&&,||")
        {
            console.log("you passed the driving license test");
        } 
        else {console.log("you dont deserve that");}
    //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^






