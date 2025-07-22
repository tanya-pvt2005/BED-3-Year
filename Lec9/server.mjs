import express from 'express'
const app = express()

app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.post("/signup",(req,res)=>{

    const {name, rno} = req.body;
    console.log(`The name is ${name} and rno is ${rno}`)
    res.send("User created successfully")
})

app.listen(3000,()=>{
    console.log("Server is running at port 3000")
})