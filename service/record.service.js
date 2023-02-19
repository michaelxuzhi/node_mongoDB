const RecordModel = require('../model/record.model');

class RecordService {
    // find方法
    async findOneRecord(condition) {
        // console.log('走到findOneRecord', condition);
        const atRecord = await RecordModel.find(condition);
        return atRecord;
    }
    // findAll
    async findAllRecord() {
        const atRecords = await RecordModel.find();
        return atRecords;
    }
    // create 创建新记录项，不可重复
    async createRecord(recordInfo) {
        const res = await RecordModel.create(recordInfo);
        return res;
    }

    // insertMany 插入多条记录项
    async insertRecords(recordInfos) {
        const res = await RecordModel.insertMany(recordInfos);
        return res;
    }

    // updateOne $set 匹配 更新字段的值
    async updateRecord(condition, updateInfos) {
        const res = await RecordModel.updateOne(condition, {
            $set: { clickTime: updateInfos['clickTime'], count: updateInfos['count'] },
        });
        return res;
    }
}

module.exports = new RecordService();
