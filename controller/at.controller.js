// at controller 实现对service层的操作
const { findCondAt, findAllAt, updateAtTag } = require('../service/at.service');
class AtController {
    async find(req, res, next) {
        // console.log(req.query);
        const { field, val } = req.query;
        const result = await findCondAt(field, val);
        res.send(result);
    }
    // 查找所有
    async findAll(req, res, next) {
        const result = await findAllAt();
        res.send(result);
    }
    // 更新某个at指令的tag字段内容
    async updateTag(req, res, next) {
        const _id = req.params._id;
        const updateInfo = req.body;
        const result = await updateAtTag(_id, updateInfo);
        res.send(result);
    }
}

module.exports = new AtController();
