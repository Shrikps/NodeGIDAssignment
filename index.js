const fs = require("fs");
const http = require("http");

const server = http.createServer((req,res)=>{
    fs.readFile('./index.html', null, (error, data)=> {
        if (error) {
            res.writeHead(404);
            res.write('Whoops! File not found!');
        } else {
            res.write(data);
        }
        res.end();
    })
});

server.listen(3000, "127.0.0.1", ()=>{
    console.log("hello");
});