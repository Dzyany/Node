/*
 * @Author: dengzy
 * @Date: 2022-04-21 20:02:02
 * @LastEditTime: 2022-04-21 20:32:03
 * @FilePath: \demo\server.js
 */
const express = require("express");
const res = require("express/lib/response");
const history = require('connect-history-api-fallback');
const app = express();
app.use(history())
app.use(express.static(__dirname+'/static'))
app.get('/person',(req,res)=>{
    res.send({
        name:'tom',
        age:19,
        data:{
            name:"dengzeyan"
        }

    })
})
app.listen(5003,(err)=>{
    if(!err) console.log('服务器启动成功')

})