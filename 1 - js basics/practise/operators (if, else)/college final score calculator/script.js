// exam score 1 and 2's avg gets %40 and final exam gets %60 of the final average also final exam must be bigger than 50 to pass 

var exam1 = 78,
    exam2 = 39,
    finalexam = 62;

let finalscore = (((exam1 + exam2) /2) * 0.4) + (finalexam * 0.6);
//                                 converts the number to integer
//                                  v
console.log("average score is: "+ parseInt(finalscore));



graduationstatus = (finalscore >= 50) //made with boolean to be simple
finalexamstatus = (finalexam >= 50) //made with boolean to be simple

if (finalexamstatus && graduationstatus) {
    console.log("status: passed!");
} else {
    console.log("status: failed");
}

