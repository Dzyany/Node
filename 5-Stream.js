/*
 * @Author: dengzy
 * @Date: 2022-11-12 19:14:16
 * @LastEditTime: 2022-11-12 21:40:57
 * @FilePath: \node\demo\5-Stream.js
 */
// Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。

var fs = require('fs');
var zlib = require('zlib');
// var data = '';

// // *ReadStream* 从流中读取数据

// // 创建可读流
// var readstrem = fs.createReadStream('./file/文本.txt');
// // 设置编码为 utf8。
// readstrem.setEncoding('utf-8');
// // 处理流事件： data - 当有数据可读时触发
// readstrem.on('data',function(chunk){
//     console.log("执行了");
//     data += chunk;
// })
// // 处理流事件：error 发生错误时触发
// readstrem.on('error',function(err){
//     console.log(err);
// })
// // 处理流事件：end - 没有更多的数据可读时触发。
// readstrem.on('end',function(){
//     console.log(data);
//     console.log('=============== 结束 ==============');
// })


// *写入流*
// var writerStream = fs.createWriteStream('./file/writeStrem.txt');
// setInterval(() => {
//     var datatime = new Date().toString()
//     writerStream.write(datatime,'utf-8');
// }, 1000);
// setTimeout(() => {
//     // 标记文件末尾
//     writerStream.end()
// }, 10000);
// writerStream.on('finish',function(){
//     console.log('finish');
// })
// writerStream.on('error',function(err){
//    console.log(err);
// })

// pipe 管道流 通常我们用于从一个流中获取数据并将数据传递到另外一个流中。

// var readStream = fs.createReadStream('./file/文本.txt');
// var writerStream = fs.createWriteStream('./file/writeStrem.txt');
// readStream.pipe(writerStream)
// writerStream.on('finish',function(){
//   console.log('finish');
// })

// 链式流 
// 对文件进行压缩并输出
// fs.createReadStream('./file/writeStrem.txt')
// .pipe(zlib.createGzip())
// .pipe(fs.createWriteStream('./file/writeStrem.txt.gz'))

// 对压缩文件进行解压缩
fs.createReadStream('./file/writeStrem.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('./file/writeStrem.txt'))


