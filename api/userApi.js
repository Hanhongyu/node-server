var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

//连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();

//增加用户接口
router.post('/addUser', (req, res) => {
    var sql = $sql.user.add;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.id, params.password], function(err, result) {
        if (err) {
            console.log(err);
        }
        console.log(result);
    })
});

//查询用户接口
router.get('/checkUser', (req, res) => {
    var sql = $sql.user.check;
    var params = req.query;
    console.log(params);
    conn.query(sql, [params.id, params.password], function(err, result) {
        if (err) {
            console.log(err);
        }
        message=JSON.stringify(result);//转换成JSON String格式
        console.log(message);
        res.end(message);
    })
});

module.exports = router;