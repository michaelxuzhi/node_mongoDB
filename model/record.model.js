let mongoose = require('mongoose');
const recordSchema = new mongoose.Schema({
    atId: {
        type: String,
        unique: true,
    },
    renderName: {
        type: String,
        unique: false,
    },
    atDesc: {
        type: String,
        unique: false,
    },
    clickTime: {
        type: Number,
        unique: false,
    },
    count: {
        type: Number,
        unique: false,
    },
});

let RecordModel = mongoose.model('atrecords', recordSchema);

module.exports = RecordModel;
