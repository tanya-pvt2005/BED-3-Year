const express = require('express')
const app = express()
const port = 4800

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

})

//ports are communication endpoints

//responses from server can be : text, html, file, json etc
