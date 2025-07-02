let someFun = require("./index");

//require function returns empty object
//req func ->index.js runs and everything inside module is sent as a javascript object
console.log(someFun)
console.log(someFun.sum(2,3))
console.log(someFun.sub(2,3))