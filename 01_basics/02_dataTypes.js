"use strict" //treat all JS code as new version

//alert( 3+3 ) //we are using node.js, NOT BROWSER

console.log(3 + 3)

const student = {
  name: "aman goswami",
  age: 20,
  cgpa: 7.6
};

student["age"] = student["age"]+1;
console.log(student["age"]);
