import express from 'express'
import fs from 'fs'
const app = express()

app.use(express.json())
app.get('/', (req, res) => {
    res.send("Hello World")
})

app.post("/signup", (req, res) => {

    const newUser = req.body;

    fs.readFile("./users.txt", "utf-8", (err, data) => {
        if (err) console.log(err);

        let users = [];
        if (data) users = JSON.parse(data);

        users.push(newUser);

        fs.writeFile("./users.txt", JSON.stringify(users), (err) => {
            if (err) console.log(err);
            console.log("Successfully written in file");
        });
    });
});


app.listen(3000, () => {
    console.log("Server is running at port 3000")
})