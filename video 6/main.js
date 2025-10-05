const express = require('express')
const app = express()
const port = 3000
const blog  = require('./routes/blog')
const fs = require("fs")

// app.use(express.static("public"))


app.use('/blog', blog)

// this is the middleware 1 
// here req means request and res means response and next means next middleware
app.use((req, res, next) => {
    console.log(req.headers)
    req.vikas = "i vikas";
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("middleware 1")  // if we use res.send in the first middleware so we can't declare the next function
    next() // this the next function if it doesn't used so we can't use the other middleware
            // and the req is stopped at a point 
  })
  
//   this is the middleware 2 
  app.use((req, res, next) => {
    console.log('LOGGED 2')
    next()
  })
  

   
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello about!' + req.vikas)
  })

  app.get('/contact', (req, res) => {
    res.send('Hello contact!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})