// testing a module
function sum(a,b) {
    return a+b
}

function multiply(a,b) {
    return a*b
}

function sub(a,b) {
    return a-b
}

function modulo(a,b) {
   return a%b 
}

module.exports={
    multiply, sub, modulo, sum
}