// This is all about the fs module and to avoid the callback hell 
// the fs module gives a new module which uses promises 

const fs = require("fs")

console.log("starting")
// fs.writeFileSync("vikas.txt" , "vikas")

fs.writeFile("vikas2.txt", "vikas is ", ()=>{
    console.log("done")
    fs.readFile("vikas2.txt",(error,data) =>{
        console.log(error,data.toString())
    })

    fs.appendFile("vikas.txt", "vikas",(e,d) => {
        console.log(d)
    })
})
console.log("ending")