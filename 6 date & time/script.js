let output;
let currenttime = new Date();



// Get Methods
output = currenttime;               // full information about year/month/day/clock/hour/minute/seccond/milliseccond
output = currenttime.getDate();     // day of month
output = currenttime.getDay();      // day of week (starts from 0:sunday to 6:saturday)
output = currenttime.getMonth();    // month (starts from 0 to 11)
output = currenttime.getFullYear(); // just the year
output = currenttime.getHours();    // current hour (24-hours time format)
output = currenttime.getTime();     // milliseccond format of current time 


// Set Methods
output = currenttime.setFullYear(currenttime.getFullYear()) // just changes the information about date
output = currenttime.setMonth(7)                            //

output = currenttime;               



let birthdate = new Date(2005,7,5);
output = currenttime.getFullYear() - birthdate.getFullYear();



console.log(output);
console.log(typeof(output));