"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _http = _interopRequireDefault(require("http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//1. creating a server
const server = _http.default.createServer(function (req, res) {
  //2. create a response
  res.end("Hello World from new Server");
}); //error


server.on('error', e => {
  if (e.code === 'EADDRINUSE') {
    console.log('Address in use, retrying...');
    setTimeout(() => {
      server.close();
      server.listen(PORT, HOST);
    }, 1000);
  }
}); //3. ensure that server listens on a port.

server.listen(8000);
console.log("Our new server is running..."); //default - main thing to come out, cz its one module

var _default2 = server;
exports.default = _default2;
var _default = server;
exports._default; //best way for node to work. trnspile to something it understands