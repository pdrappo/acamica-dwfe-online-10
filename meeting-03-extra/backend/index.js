const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hola Trainee! Este es la API de la meeting-03 de DWFE-ONLINE-10')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})