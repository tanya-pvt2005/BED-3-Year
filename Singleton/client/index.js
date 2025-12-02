//when we need only one object like principal: jo class bana rha h uske paas power honi chhaiye for object creation, and not the client

const Principal = require("../Principal/principal")

function suspend(studentName){
    // let Principal = new Principal("Nitesh")
    // Principal.suspend(studentName)
    let principal = Principal.getPrincipal()
}

function notify(){
    let principal = new Principal("Tanya")
}