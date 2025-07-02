function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}

// one method 

// module.exports={
//     sum,
//     sub
// }

//other method : ek ek krke key value banan ====> PREFFERED MORE
module.exports.sum=sum
module.exports.sub=sub

//commonJs by default method to export and import modules ---> require(), after 2012 - import method
