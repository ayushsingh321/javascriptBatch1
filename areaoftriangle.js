var side1 = 15; 
var side2 = 25; 
var side3 = 29; 
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);
