//import our http module
var http = require("http");

//define a port to listen to
var port1=7500;
var port2=7000;

//function to handle requests
function goodResponse(request, response){
    response.end("Your the best" + request.url);
    console.log(request.url);
}

function badResponse(request, response){
    response.end("You suck" + request.url);
    console.log(request.url);
}
var server = http.createServer(badResponse);
var server2 = http.createServer(goodResponse);

//Start server 
server2.listen(port2, function(){
    //server is now listening
    console.log("server listening on :http://localhost:%s", port2 );
});

server.listen(port1, function(){
    //server is now listening
    console.log("server listening on :http://localhost:%s", port1 );
});