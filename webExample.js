var http=require(http);
http.createServer(fnction(request,response){
response.writeHead(200,{'Content-Type':'text/plain'});
response.end('Hello World\n');

}).listen(8080);
console.log('Server Running at http://192.168.122.1/');