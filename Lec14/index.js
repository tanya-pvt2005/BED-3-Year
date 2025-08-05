const express = require("express")

const app = express()
const fs = require("fs")

app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + "/public"))
app.get("/users", (req, res) => {
    fs.readFile("./users.json", "utf-8", function (err, data) {
        if (err) res.send(err);
        let alluser = JSON.parse(data);
        // console.log(alluser);
        res.json(alluser);
    })
})

app.post("/addUser",(req,res)=>{

    try{
        let name = req.body.name;
        let username = req.body.username;
        let newUser = {
            id:Math.floor(Math.random()*100000),
            name:name,
            username:username,
            role:"user"
        }

        let allUser = []
        let data = fs.readFileSync("./users.json","utf-8")
        if(data){
            allUser = JSON.parse(data)
        }
        allUser.push(newUser)
        fs.writeFileSync("./users.json", JSON.stringify(allUser))
    }catch(error){
        return error;
    }
})
app.listen(3000, () => {
    console.log("serr start")
})

