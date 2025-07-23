// server.js
const express = require('express')
const fs = require("fs")
const app = express();
const PORT = 3000;

app.use(express.json());  //to parse json data
app.use(express.urlencoded({extended : true}))  //to parse form data
app.use(express.static(__dirname+"/public"))  //send static folder to browser

// app.get('/', (req, res) => {
//   //res.sendFile(__dirname+"/index.html")
//   //to send public folder
// });

app.post('/signup',(req, res)=>{
  
  //getting data from form
  const newUser = req.body;

  res.send("Successfully registered user in database")
  //reading file to open the database
  fs.readFile("users.txt", "utf-8", (err, data)=>{

    if(err) console.log(err)
    
    //pushing existing data in userData array (if any)
    let userData = []

    if(data){
      userData = JSON.parse(data)
    }

    //pushing newUser to existing database file
    userData.push(newUser)

    //now I have an array of all the values updated, I need to write it in the file (database here)
    fs.writeFile("users.txt", JSON.stringify(userData, null, 2), (err)=>{
      if(err) console.log(err)
      console.log("Successfully written in file");
    })
    



  })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
