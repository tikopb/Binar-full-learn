const http = require("http");
const fs = require("fs");

function onRequest(request, response) { // request dan reponse wajib ada 
    response.writeHead(200, {"Content-Type": "text/html"})
    fs.readFile("./index.html", null, (erorr, data) => {
        if(erorr){
            response.writeHead(404)
            response.write("File not Found")
        }else{
            response.write(data)
        }
        response.end()
    })
}

http.createServer(onRequest).listen(8000)