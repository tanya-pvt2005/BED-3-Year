function sum(a,b){

    if(a == undefined || b == undefined){
        return "all arguments must be passed"
    }
    if(typeof(a) != "number" ||typeof(b)!= "number"){
        return "all arguments must be number"
    }

    return a+b
}

// console.log(sum(2))
module.exports = sum