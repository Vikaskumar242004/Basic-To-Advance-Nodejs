console.log("hello world")

// node.js kya he 
// node js javascript ka v8 engine he and use for backend
// ek npm project se hm kya kr skte he 
//      : packages install kr skte he 

// what is slugify
// slugify means that it removes the space between the letters and for special charachters it gives the name of it
// example for slugify

var slugify = require('slugify')

let a = slugify('some string')
console.log(a)

const b = slugify('some string&^%()*%&^%(', '_')
console.log(b)