let//          birth date v |  v  v  v exam scores
  stdnt1 = ["deniz bilgi",2010,70,60,80,71],
  stdnt2 = ["ada bilgi"  ,2012,80,80,90,72],
  stdnt3 = ["ahmet kaya" ,2009,60,60,70,73];
//                                      ˆ school numbers

let currenttime = new Date();               // creating a new date variable    //
let currentyear = currenttime.getFullYear();//                                 // making a new variable that has current year in it 

let studentselection = stdnt2; // selecting the student


let selectedstudentid = studentselection[5];
let studentname  = studentselection[0];
let studentage   = currentyear - studentselection[1];
let studentscore = (studentselection[2] + studentselection[3] + studentselection[4])/3;


console.log("vvvv  "+"selected student id: "+selectedstudentid+"  vvvvv");
console.log("name and surname: "+studentname);
console.log("exams score: "+parseInt(studentscore)); 
console.log("age: "+studentage);
console.log("ˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆ");

