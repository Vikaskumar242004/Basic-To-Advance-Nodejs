import fs from "fs/promises"

let a = await fs.readFile("vikas.txt")

let b = await fs.writeFile("vikas.txt", "this is the promise")

console.log(a.toString())