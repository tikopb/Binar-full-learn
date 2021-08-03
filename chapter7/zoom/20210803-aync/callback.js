const fs = require("fs");
const option = { encoding: "utf-8"};

const functionCallback = (err, data) => {
    console.log("aku Muncul Kedua"); 
    if(err) return console.error("Erorr", err.message); 
    console.log("isi File:", data);
};

fs.readFile("contoh.txt", option, functionCallback);

console.log("aku muncul pertama");

console.log("set Timeout");
console.log('aku keluar pertama')

setTimeout(() => console.log('Aku keluar setelah 3 detik'), 3000)
setTimeout(() => console.log('Aku keluar setelah 0 detik'), 0)
