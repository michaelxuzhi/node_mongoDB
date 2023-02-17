const {
    findOneRecord,
    findAllRecord,
    createRecord,
    insertRecords,
} = require('../service/record.service');

class RecordController {
    async getOneRecord(req, res, next) {
        const { field, val } = req.query;
        const result = await findOneRecord(field, val);
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
        const _id = req.params._id;
        const recordInfo = req.body;
        recordInfo['atId'] = _id;
        const result = await insertRecords(recordInfo);
        res.send(result);
    }
}

module.exports = new RecordController();
