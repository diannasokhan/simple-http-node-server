const http = require('http');
const port = 3000;
const fs = require('fs');

const requestHandler = (request, response) => {
    fs.writeFile('hello-world.txt', 'Hello to this great world', 'utf8')
    response.end(`File created`)
}

const server = http.createServer(requestHandler);
server.listen(port, (err) => {
    if(err){
        return console.log(`You have an error: ${port}`);
    }
    console.log(`server is listening on ${port}`);
})