const express = require('express');
const mongoose = require('mongoose')
const Blogs = require("./models/user")
const app = express();
const port = 3000;

// hw : create userSchema, email, username and pswd. create 3 routes -> add user, get all user and get single user. Do this in user.js


// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded())

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.post("/blogs", async(req, res)=>{
    let {title,body} = req.body;
    let newBlog = new Blogs({
        title: title,
        body: body,
        date: Date.now()
    })

    await newBlog.save()
    // console.log(title, body)
    res.json({
        success: true,
        data:newBlog,
        message : "Blog added successfully"
    })
})

app.get("/blogs",async (req,res)=>{
    let allBlogs = await Blogs.find();
     res.json({
        success: true,
        data:allBlogs,
        message : "Blog added successfully"
    })
})

app.get("/blogs/:id", async (req,res)=>{
    let {id} = req.params
    let blog = await Blogs.findOne({_id:id})
    res.json({
        success:true,
        data:blog
    })
})
// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    mongoose.connect('mongodb://127.0.0.1:27017/g26').then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.error('Error connecting to MongoDB', err);
    });
});