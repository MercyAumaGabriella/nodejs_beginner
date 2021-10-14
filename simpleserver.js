import http from "http";

//1. creating a server
const server = http.createServer(function(req, res) {
    //2. create a response
    res.end("Hello World from new Server");
});

//error
server.on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
      console.log('Address in use, retrying...');
      setTimeout(() => {
        server.close();
        server.listen(PORT, HOST);
      }, 1000);
    }
  });

//3. ensure that server listens on a port.
server.listen(8000);
console.log("Our new server is running...");

//default - main thing to come out, cz its one module
export default server;

var _default = server;

//best way for node to work. trnspile to something it understands