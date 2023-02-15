const RecordModel = require('../model/record.model');

class RecordService {
    // find方法
    async findOneRecord(field, val) {
        let condition = {};
        condition[field] = val;
        const atRecord = await RecordModel.find(condition);
        return atRecord;
    }
    // findAll
    async findAllRecord() {
        const atRecords = await RecordModel.find();
        return atRecords;
    }
    // create 创建新记录项
    async createRecord(recordInfo) {
        const res = await RecordModel.create(recordInfo);
        return res;
    }
}

module.exports = new RecordService();
