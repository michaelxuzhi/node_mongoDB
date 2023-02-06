let mongoose = require('mongoose');
let connection = require('./connection');

let atSchema = new mongoose.Schema({
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
    renderName: {
        type: String,
        unique: true,
    },
});

let at = connection.model('at', atSchema, 'at');

// at.find({ name: 'add_skill' }).then(doc => {
at.find({}).then(doc => {
    console.log(doc);
});
