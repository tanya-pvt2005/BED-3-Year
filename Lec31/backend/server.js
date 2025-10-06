import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port:8888})

// wss.on("connection", function connection(ws){
//     ws.on('message', function message(data){
//         console.log('recieved: %s', data)
//     })

//     ws.send('something')

// })
    
let allSocket = []
wss.on("connection", function(socket){
    console.log("User connected")
    allSocket.push(socket)
    socket.on("message", function(message){
        console.log("message recieved "+message.toString())
        allSocket.forEach((s)=>{
            s.send(message.toString())
        })
    })
})

