// 真正操作数据库
const AtModel = require('../model/at.model');

class AtService {
    // find方法
    async findOneAt(field, val) {
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
    // 更新doc某字段中的数组项的值
    async updateAtTag(_id, updateInfo) {
        // let condition = {};
        // condition['_id'] = _id;
        // const res = await AtModel.findOneAndUpdate(_id, updateInfo);
        // return res;
        if (updateInfo['op'] == 1) {
            // 增加doc某字段中的数组项的值
            const res = await AtModel.update(
                { _id },
                { $push: { tag: updateInfo['tag'] } }
            );
            return res;
        } else {
            // 删除doc中某字段中的数组的值
            const res = await AtModel.update(
                { _id },
                { $pull: { tag: updateInfo['tag'] } }
            );
            return res;
        }
    }
}

module.exports = new AtService();
