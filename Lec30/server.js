const { WebSocketServer } = require('wb');

const wss = new WebSocketServer({ port: 8080 })
wss.on("connection", function (socket) {
    console.log(socket)
    setInterval(() => {
        socket.send("Hi Welcome")

    }, 500)

}) //event handler