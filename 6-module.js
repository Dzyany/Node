/*
 * @Author: dengzy
 * @Date: 2022-11-12 22:14:00
 * @LastEditTime: 2022-11-12 22:19:33
 * @FilePath: \node\demo\6-module.js
 */
var Student = require('./model/Student')
var stu = new Student();
stu.setName("邓则艳1")
stu.sayName()