// 真正操作数据库
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
    // 更新某个字段的值
    async updateAt(_id, updateInfo) {
        // let condition = {};
        // condition['_id'] = _id;
        const res = await AtModel.findOneAndUpdate(_id, updateInfo);
        return res;
    }
}

module.exports = new AtService();
