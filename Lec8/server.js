const express = require('express')
const app = express()
const port = 4800

app.get('/', (req, res) => {

    //   res.send('Hello World!')
    //   res.send("<h1>Hello Tanya</h1>")
    //   res.sendFile(__dirname+"/index.html")
    //   res.json({
    //     "name":"Tanya",
    //     "age" : 24
    // })

    res.end("Hi I am a girl")


    //difference between res.send and res.end
    // res.end only for string
    //res.send: res header send hota hai

})


//Path Variable
//if url has a variable : path variable; 2 ways to send it: query parameter and params
// 1. Query Parameter
// 2. Params

//1. Query Parameter: query from client not made on server
app.get('/watch',(req,res)=>{
    let videoId = req.query.n
    console.log(videoId) //req.query is an object; extract v from it
    res.send("Got the id!")
})

//2. Params : made :v ourself, after :v -> all put in the path variable v
app.get('/watch/:v/video/:n',(req,res)=>{
    
    res.send("Got the id!")
    console.log(req.params.v) //req.params is an object; extract v from it
    console.log(req.params.n) //req.params is an object; extract v from it


    //mutiple params: / lagate raho
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)

})

//ports are communication endpoints

//responses from server can be : text, html, file, json etc
