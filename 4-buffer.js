/*
 * @Author: dengzy
 * @Date: 2022-11-11 19:37:34
 * @LastEditTime: 2022-11-12 18:37:00
 * @FilePath: \node\demo\4-buffer.js
 */
// 学习教程 https://www.runoob.com/nodejs/nodejs-buffer.html

/* 在 Node.js中，定义了一个 Buffer 类，
1.该类用来创建一个专门存放二进制数据的缓存区。
2.Buffer 类是随 Node 内核一起发布的核心库。
*/

const buf = Buffer.from('A', 'ascii');
const buf2 = Buffer.from('A', 'base64');
const buf3 = Buffer.from('A', 'hex');

// console.log(buf);
// console.log(buf2);
// console.log(buf3);

// 创建Buffer 类

// 创建10个字节的buffer，默认以a填充
const buf4 = Buffer.alloc(10,'a','ascii')
// console.log(buf4.toString('ascii'));
// aaaaaaaaaa
buf4.write('hello')
// console.log(buf4.toString('ascii'));
// helloaaaaa
buf4.write('world-1',5,5) //从索引为5的位置开始写入，写5个字符
// console.log(buf4.toString('ascii'));
// helloworld

const buf5 = Buffer.allocUnsafe(5);
const buf6 = Buffer.alloc(5);
// console.log(buf5);
// console.log(buf6);
// <Buffer 00 00 00 00 00>
// <Buffer 00 00 00 00 00>

const buf7 = Buffer.from([1, 2, 3]);
// console.log(buf7.toString("ascii"));

const buf8 = Buffer.alloc(26);
let arr= []
for(i =  0;i< buf8.length; i++ ){
    buf8[i] = i+97
}
// console.log(buf8.toString()); //默认已UTF-8的格式输出
// abcdefghijklmnopqrstuvwxyz

// console.log(buf8.toString('utf-8',3,4)); //默认已UTF-8的格式输出
// d

// 将 Buffer 转换为 JSON 对象
// 调用JSON.stringify(buf)和JSON.parse(json, (key, value) => {})
// console.log(buf8.toJSON());
// {
//     type: 'Buffer',
//     data: [
//        97,  98,  99, 100, 101, 102,
//       103, 104, 105, 106, 107, 108,
//       109, 110, 111, 112, 113, 114,
//       115, 116, 117, 118, 119, 120,
//       121, 122
//     ]
//   }

// 缓冲区合并 Buffer.concat(list[, totalLength])
const buf9 = Buffer.from('hello');
const buf10 = Buffer.from('world');
const buf11 = Buffer.concat([buf9,buf10])
// console.log(buf11.toString());
// helloworld

const buf12 = Buffer.from('hello');
const buf13 = Buffer.from('hello');
// console.log(buf12.compare(buf13));
// 0 相同
// -1 之前有差异
// 1 之后有差异

const buf14 = Buffer.from('abc');
const buf15 = Buffer.from('ad');
// console.log(buf14.compare(buf15));
// -1 相同

const buf16 = Buffer.from('a');
const buf17 = Buffer.from('ab');
// console.log(buf16.compare(buf17));
// -1
// 拷贝缓冲区
var buf18 = Buffer.from('abcdefghijkl');
var buf19 = Buffer.from('RUNOOB');
var buf20 = buf18.copy(buf19,3,0)
// console.log(buf20.toString());
// abcdRUNOOBefghijkl







