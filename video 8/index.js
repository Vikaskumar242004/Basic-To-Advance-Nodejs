const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');


//  https://github.com/mde/ejs/wiki/Using-EJS-with-Express

app.get('/', (req, res) => {
    let sitename = "vikas"
    let serachtext = "search now"
  // res.sendFile("templates/index.html", {root: __dirname})
  res.render("templates/index.html", {sitename : sitename, serachtext: serachtext})
})


app.get('/blog/:slug', (req, res) => {
    let blogtitle = "vikas is a gandfad guy"
    let blogcontent = "its a very introvert ldka"
  // res.render("templates/blogpost.html", {root: __dirname})  used for single variable 
  res.render("templates/blogpost.html", {blogtitle: blogtitle, blogcontent : blogcontent})  // extra line for passing the template 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})