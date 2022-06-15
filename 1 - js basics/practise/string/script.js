let url = "https://www.udemy.com/komple-web-developer-kursu"
let coursename = "Complete Web Developing Course"




let output1 = url.length; // counts the length of the string
console.log(output1);




output2 = coursename.includes("education"); // checks if the variation includes "education"
console.log(output2);   







output3 = url.slice(0,5);                    //
if (output3 == "https") {output3 = true;}     // checks if the first 5 letter is "https" or not
else { output3 = false }                      //

console.log(output3);










let output4 = coursename.split(" ");        // splits the string to an array from " "'s

let thelengthofarray = output4[3].length;    //this thing counts the elements in the array
let thelenthofelement = output4.length;      // and this one counts the letters of the specifield array element

console.log(thelenthofelement);             // so this code counts how many words in the string








let begginingofthelink = url.slice(0,22)                //a link generator algorithm
let endofthelink;

    endofthelink = coursename.toLocaleLowerCase();
    endofthelink = endofthelink.replaceAll(" ","-");

console.log(begginingofthelink + endofthelink);

