let mongoose = require('mongoose');
const recordSchema = new mongoose.Schema({
    atId: {
        type: String,
        unique: true,
    },
    renderName: {
        type: String,
        unique: true,
    },
    atDesc: {
        type: String,
        unique: true,
    },
    clickTime: {
        type: Number,
        unique: true,
    },
    count: {
        type: Number,
        unique: true,
    },
});

let RecordModel = mongoose.model('atrecords', recordSchema);

module.exports = RecordModel;
