var student1_name = "ada bilgi",
    stdnt1_birthdate = "2012",
    stdnt1_score1 = 70,
    stdnt1_score2 = 70,
    stdnt1_score3 = 80;

var stdnt2_name = "yiğit bilgi",
    stdnt2_birthdate = "2010",
    stdnt2_score1 = 40,
    stdnt2_score2 = 45,
    stdnt2_score3 = 50;

var stdnt1_avgscore = ((stdnt1_score1 + stdnt1_score2 + stdnt1_score3)/3),
    stdnt2_avgscore = (stdnt2_score1 + stdnt2_score2 + stdnt2_score3)/3;





let currentyear = new Date().getFullYear(); // heres an example of date() commands use

//                             parseInt converts any type of var values to integer (its similar to convert.toInt() from c#)
//                              v
let stdnt1_age = currentyear - parseInt(stdnt1_birthdate); // age calculation based on birth date
let stdnt2_age = currentyear - parseInt(stdnt2_birthdate); // 

    
    
     console.log("");
     console.log("");
     

     console.log("vvvvvvvv Student 1 vvvvvvvvvvvvv");
     console.log("student name: "+ student1_name);
     console.log("student age: "+ stdnt1_age);
     console.log("student average score: "+ parseInt(stdnt1_avgscore));
     console.log("student status: "+ (stdnt1_avgscore >= 50));
     console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");

     
     console.log("");
     console.log("");


     console.log("vvvvvvvv Student 2 vvvvvvvvvvvvv");
     console.log("student name: "+ stdnt2_name);
     console.log("student age: "+ stdnt2_age);
     console.log("student average score: "+ parseInt(stdnt2_avgscore));
     console.log("student status: "+ (stdnt2_avgscore >= 50));
     console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");

     console.log("");

