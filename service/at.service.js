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
    async updateAtTag(condition, updateInfo) {
        if (updateInfo['op'] == 1) {
            // 增加doc某字段中的数组项的值
            const res = await AtModel.updateOne(condition, {
                $push: { tag: updateInfo['tag'] },
            });
            return res;
        } else if (updateInfo['op'] == 2) {
            // 删除doc中某字段中的数组的值
            const res = await AtModel.updateOne(condition, {
                $pull: { tag: updateInfo['tag'] },
            });
            return res;
        }
    }
}

module.exports = new AtService();
