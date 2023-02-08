// at controller 实现对service层的操作
const { findCondAt, findAllAt } = require('../service/at.service');
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
}

module.exports = new AtController();
