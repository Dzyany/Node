/*
 * @Author: dengzy
 * @Date: 2022-11-12 22:00:48
 * @LastEditTime: 2022-11-12 22:18:37
 * @FilePath: \node\demo\model\Student.js
 */
// 方法一
// module.exports = function() {
//     var name
//     this.setName = function(val){
//         name = val
//     }
//     this.sayName = function(){
//         console.log(name);
//     }
//   }

// 方法二
function Student(){
    var name
    this.setName = function(val){
        name = val
    }
    this.sayName = function(){
        console.log(name);
    }
}
module.exports = Student
