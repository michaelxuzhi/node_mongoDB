// connection.js file
const mongoose = require('mongoose');
const { url, dbname } = require('./config');

const conn = mongoose.createConnection(`${url}/${dbname}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
conn.on('open', () => {
    console.log('打开 mongodb 连接');
});
conn.on('err', err => {
    console.log('err:' + err);
});

module.exports = conn; //commonJs 语法，导出conn模块。
