// at controller 实现对service层的操作
const { findOneAt, findAllAt, updateAtTag } = require('../service/at.service');
class AtController {
    async getOneAt(req, res, next) {
        // console.log(req.query);
        const condition = req.params;
        const result = await findOneAt(condition);
        res.send(result);
    }
    // 查找所有
    async getAllAt(req, res, next) {
        const result = await findAllAt();
        res.send(result);
    }
    // 更新某个at指令的tag字段内容
    async updateTag(req, res, next) {
        const condition = req.params;
        const updateInfo = req.body;
        const result = await updateAtTag(condition, updateInfo);
        res.send(result);
    }
}

module.exports = new AtController();
