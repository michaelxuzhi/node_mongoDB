//event.js 文件
const { userFormatError } = require('./err.type');
var events = require('events');
var emitter = new events.EventEmitter();
app.$emitter.on('someEvent', function (arg1, arg2) {
    console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function (arg1, arg2) {
    console.log('listener2', arg1, arg2);
});
emitter.emit('someEvent', 'arg1 参数', 'arg2 参数');
