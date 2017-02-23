/**
 * 23/02/2017 vijays: initial version
 */

var http = require("http");

http.createServer(handleRequest).listen(8888);

console.log("Server has started..");

function handleRequest(req, res){
    console.log("User made a request: "+req.url);
    res.writeHead(200, {'Context-Type': 'text/plain'});
    res.write("Some data..");
    res.end();
}

