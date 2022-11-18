/*
 * @Author: dengzy
 * @Date: 2022-11-14 15:54:27
 * @LastEditTime: 2022-11-16 13:03:11
 * @FilePath: \Node\8-router.js
 */
var http = require("http");
var url = require("url");

function start() {
    function onRequest(request, response) {
      var pathname = url.parse(request.url).pathname;
      console.log("Request for " + pathname + " received.");
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write("Hello World");
      response.end();
    }
   
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
  }
   
  exports.start = start;

