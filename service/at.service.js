const app = require('../app');
const AtModel = require('../model/at.model');

class AtService {
    // find方法
    async findCondAt(field, val) {
        let condition = {};
        condition[field] = val;
        // console.log(condition);
        const atFindRes = await AtModel.find(condition);
        // console.log(atFindRes);
        return atFindRes;
    }
    async findAllAt() {
        const atFindRes = await AtModel.find();
        return atFindRes;
    }
}

module.exports = new AtService();
