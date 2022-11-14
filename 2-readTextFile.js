/*
 * @Author: dengzy
 * @Date: 2022-11-10 14:43:52
 * @LastEditTime: 2022-11-10 15:06:46
 * @FilePath: \node\demo\2-readTextFile.js
 */
var fs = require("fs");
 // 阻塞
var data = fs.readFileSync('./file/文本.txt');
// /* Buffer 格式 */
// console.log(data)
console.log(data.toString());
console.log("程序执行完毕")

// 非阻塞
// var fa = require('fs');
// fs.readFile('./file/文本.txt',function(err,data){
//     if(err)return console.log(err)
//     console.log(data.toString())
// })
// console.log("程序执行结束!");

