const http = require("http");
const fs = require("fs");

// on request when is html code 
function onRequestHtml(request, response){
    response.writeHead(200, { "Content-Type": "text/html"})
    fs.readFile("./index.html", null, (erorr, data) => {
        if(erorr) {
            response.writeHead(404)
            response.write("File not Found")
        }else {
            response.write(data)           
        }
        response.end()
    })
}

// on request when return is json data
function onRequestJSON(request, response){
    response.writeHead(200, { "Content-Type": "application/json"})
    const data = {
        name: "Tiko Putra",
        age: 26 
    }
    response.end(JSON.stringify(data))
}

http.createServer(onRequestJSON).listen(8000)