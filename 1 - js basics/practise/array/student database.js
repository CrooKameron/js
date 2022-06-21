let//          birth date v |  v  v  v exam scores
  stdnt1 = ["deniz bilgi",2010,70,60,80,927426],
  stdnt2 = ["ada bilgi"  ,2012,80,80,90,2,2948],
  stdnt3 = ["ahmet kaya" ,2009,60,60,70,3,572569];


let studentselection = stdnt1;
let selectedstudentid = studentselection[5];
let studentname  = studentselection[0];
let studentage   = 2022 - studentselection[1];
let studentscore = (studentselection[2] + studentselection[3] + studentselection[4])/3;


console.log("vvvv  "+"selected student id: "+selectedstudentid+"  vvvvv");
console.log("name and surname: "+studentname);
console.log("exams score: "+studentscore);
console.log("age: "+studentage);
console.log("ˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆ");
