const chalk = require("chalk")
const os = require("os")
const fs = require("fs")
const orang = require("./orang.json")
const Calculation = require("./utils/calculation.js") // <-local module

console.log(Calculation(3,4))

console.log(orang.name)
console.log(chalk.redBright('Hello world!'));

function writeANewFile() {
    fs.writeFileSync('./dataUser.txt', 'Testing write File')
}

function readAFile(){
    return fs.readFileSync('./dataUser.txt', 'utf-8')
}

writeANewFile()
console.log(readAFile())

const buatOrang = function writeAJsonFile(orang){
    fs.writeFileSync('./orang.json', JSON.stringify(orang))
    console.log(chalk.greenBright('success import'))
    return orang;
}

const tiko = buatOrang({
    name :'Tiko',
    age : 22,
    adress : 'Tlogosari'
})

