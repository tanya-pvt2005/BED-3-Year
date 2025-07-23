// server.js
const express = require('express')
const app = express();
const PORT = 3000;

app.use(express.json()); 
app.use(express.static(__dirname+"/public"))

// app.get('/', (req, res) => {
//   //res.sendFile(__dirname+"/index.html")
//   //to send public folder
 
// });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
