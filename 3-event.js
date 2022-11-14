/*
 * @Author: dengzy
 * @Date: 2022-11-11 14:06:06
 * @LastEditTime: 2022-11-11 19:35:03
 * @FilePath: \node\demo\3-event.js
 */
// // 引入事件模板
var events = require('events');
// // 创建eventEmitter 事件驱动对象
var eventEmitter = new events.EventEmitter();
// // 事件绑定处理程序
// eventEmitter.on('click',function(){
//     console.log("eventEmitter 事件驱动调用了")
// })
// // 触发事件
// eventEmitter.emit('click');

// eventEmitter.addListener('dbclick',function(err,data){
//     console.log("eventEmitter 双击 事件驱动调用了")
// })
// eventEmitter.addListener('dbclick',function(err,data){
//     console.log("2 eventEmitter 双击 事件驱动调用了")
// })
// eventEmitter.addListener('dbclick',function(err,data){
//     console.log("3 eventEmitter 双击 事件驱动调用了")
// })

// eventEmitter.emit('dbclick')
var listene = function(arg){
    console.log(arg);
}
var listene2 = function(arg){
    console.log(arg);
}
eventEmitter.on('oncetest',()=>listene('哈哈'));
eventEmitter.on('oncetest',()=>listene('哈哈嘻嘻'));
eventEmitter.on('oncetest',()=>listene2('哈哈哈哈'));
eventEmitter.emit('oncetest')
// 哈哈
// 哈哈嘻嘻
// 哈哈哈哈

// listenerCount 返回指定事件的监听器数量
console.log(eventEmitter.listenerCount('oncetest') )
// 3




// var events = require('events'); 
// var emitter = new events.EventEmitter(); 
// emitter.emit('error'); 



