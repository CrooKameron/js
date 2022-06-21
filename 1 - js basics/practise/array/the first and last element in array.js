let variable1 = ["item1","item2","item3","item4","item5"];

let first = variable1.slice(-1);     // last item
let last = variable1.splice(0,1);    // first item

console.log("first item: ",first);
console.log("last item: ",last);