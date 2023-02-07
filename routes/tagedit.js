// 指令标签修改-路由
var express = require('express');
var router = express.Router();
const atModel = require('../public/javascripts/mongoDB/model/at.model');

// router.post('/', function (req, res) {
router.get('/', (req, res) => {
    atModel
        .find({ name: 'MTL' })
        .then(doc => {
            console.log(doc);
            res.send(doc);
        })
        .catch(err => {
            res.send('数据异常');
        });
});
// connection.end();
module.exports = router; // 导出路由
