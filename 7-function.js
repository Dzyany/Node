// 在 JavaScript中，一个函数可以作为另一个函数的参数。我们可以先定义一个函数，然后传递，
// 也可以在传递参数的地方直接定义函数。
// function sayHi(val){
//     console.log(val);
// }
// function sayName(val){
//     console.log(val);
// }
// function write(fun,val){
//     fun(val)
// }

// write(sayHi,'你好')
// write(sayName,'邓则艳')
// // 你好
// // 邓则艳

// write(function(word){
//     console.log(word);
// },'你好')
// // 你好

var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);
// http://localhost:8888/
// Hello World

// 亦或是
var http = require("http");

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8888);




