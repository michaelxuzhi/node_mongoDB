let mongoose = require('mongoose');
const atSchema = new mongoose.Schema({
    parentName: {
        type: String,
    },
    desc: {
        type: String,
    },
    example: {
        type: String,
    },
    name: {
        type: String,
    },
    params: {
        type: String,
    },
    tag: {
        type: Array,
    },
});

let AtModel = mongoose.model('atcos', atSchema);

module.exports = AtModel;
