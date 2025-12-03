const express = require("express")
const mongoose = require("mongoose")
const User = require("./model/user.model")
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

// post req
app.post("/api/users/register",async (req,res)=>{
    let{name, email, password} = req.body
    const exists = await User.findOne(email)
    if(exists){
        res.json({
            success:false,
            message:"user already exists"
        })
    }
    
    let newUser = await User.create({
        name:name,
        email:email,
        password: password
    })

     res.json({
            success:true,
            message:"user registered successfully",
            data:newUser
        })
})

// dont need connection while testing(mongodb, server) etc

//for integration testing we need a different db -> ***mongodb memory server****
//before all tests: we make connection with this
//after each test: Data inserted or deleted etc ----------> needs to be deleted
//after all tests: Disconnect from the database and close it

// app.listen(3000,()=>{
//     res.send("Server started")
// })


module.exports = app