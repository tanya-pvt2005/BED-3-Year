import express from 'express'
import fs from 'fs'
const app = express()

app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.post("/signup",(req,res)=>{

    // const {name, age} = req.body
    fs.appendFile('./user.txt', JSON.stringify(req.body),(err)=>{

        if(err) console.log(err)
        console.log(`Users successfully written in the file`)
        console.log()
    })
    res.send("Done")
})

app.listen(3000,()=>{
    console.log("Server is running at port 3000")
})