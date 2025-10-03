const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// an example of express.js 

// app.get('/blog/intro-to-js', (req, res) => {
//   // logic to fetch intro to js from the db 
//   res.send('hello into to js')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//   // logic to fetch intro to python from the db
//   res.send('Hello intro to python')
// })


// instead of writing the upper code we use the slug function 
// and slug is known as a parameter

app.get('/blog/:slug', (req, res) => {
  res.send(`hello ${req.params.slug}`)
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})