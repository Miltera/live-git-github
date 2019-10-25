const express = require('express')

const app = express()

app.get('/test', (req, res) => {
  return res.json({
    message: "Hello World"
  })
})

app.get('/person/:name', (req, res) => {
  return res.json({
    message: `Hello ${req.params.name}!`
  })
})

app.listen(3333);