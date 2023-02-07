let atModel = require('./model/at.model');

class atController {
    async findOne(req, res, next) {
        console.log('执行findOne');
        console.log(atModel);
        atModel.find({ name: 'add_skill' }).then(doc => {
            res.send(doc);
        });
    }
    // async findAll() {
    //     console.log('执行findAll');
    //     atModel.find({}).then(doc => {
    //         return doc;
    //     });
    // }
    async doResponse() {}
}

module.exports = new atController();
