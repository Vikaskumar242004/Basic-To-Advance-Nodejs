const express = require('express')
const blog = require('./routes/blog')


const app = express()
const port = 3000


app.use(express.static("public"))
app.use('/blog', blog)

app.get('/', (req, res) => {
    console.log("hey its a GET request")
    res.send('Hello World25')
})

app.post('/', (req, res) => {
    console.log("hey its a POST request")
    res.send('Hello World beta')
})

//   put req use for update 
app.put('/', (req, res) => {
    console.log("hey its a PUT request")
    res.send('Hello World PUT')
})

//   for delteting 
app.delete('/', (req, res) => {
    console.log("hey its a DELETE request")
    res.send('Hello World DELETE')
})

app.get("/index", (req, res) => {
    // agar html ka koi text pass krna ho to to khali res.send kare 
    console.log("hey its index")
    // agar ek pura html structure pass krna ho to res.sendFile ka use kare
    // or phle folder or file ka name de or fir root: __dirname de 
    res.sendFile('template/index.html', { root: __dirname })
})

app.get('/api', (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4 })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

