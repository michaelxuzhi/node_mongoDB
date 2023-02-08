let mongoose = require('mongoose');
const atSchema = new mongoose.Schema({
    parentName: {
        type: String,
        unique: true,
    },
    desc: {
        type: String,
        unique: true,
    },
    example: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
        unique: true,
    },
    params: {
        type: String,
        unique: true,
    },
});

let AtModel = mongoose.model('atcos', atSchema);

module.exports = AtModel;
