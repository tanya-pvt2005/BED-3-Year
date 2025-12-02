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

// app.listen(3000,()=>{
//     res.send("Server started")
// })


module.exports = app