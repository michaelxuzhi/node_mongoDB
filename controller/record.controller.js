const {
    findOneRecord,
    findAllRecord,
    createRecord,
    insertRecords,
    updateRecord,
} = require('../service/record.service');

class RecordController {
    async getOneRecord(req, res, next) {
        // const { field, val } = req.query;
        const _id = req.params._id + ''; // 转成String
        let condition = {};
        condition['atId'] = _id;
        const result = await findOneRecord(condition);
        res.send(result);
    }
    async getAllRecord(req, res, next) {
        const result = await findAllRecord();
        res.send(result);
    }
    async createRecord(req, res, next) {
        // console.log(req.body);
        const _id = req.params._id;
        const recordInfo = req.body;
        recordInfo['atId'] = _id;
        const result = await createRecord(recordInfo);
        res.send(result);
    }
    async updateRecord(req, res, next) {
        let condition = {};
        const _id = req.params._id + ''; // 转成String
        const recordInfo = req.body;
        condition['atId'] = _id;
        recordInfo['atId'] = _id;
        const findRes = await findOneRecord(condition);
        if (findRes.length) {
            // res.send('已存在'); // 已存在就更新搜索记录的点击时间和点击次数
            const updateRes = await updateRecord(condition, recordInfo);
            res.send(updateRes);
            return;
        } else {
            const createRes = await insertRecords(recordInfo);
            res.send(createRes);
            return;
        }
    }
}

module.exports = new RecordController();
