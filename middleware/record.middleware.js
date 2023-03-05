// 导入service层数据获取
const {
    findOneRecord,
    findAllRecord,
    deleteRecordById,
} = require('../service/record.service');

const LRUCacheLength = 10;

// LRU校验
const LRUValidator = async (req, res, next) => {
    const _id = req.params._id; // 需要String格式
    const allRecords = await findAllRecord();
    let recordLength = allRecords.length;
    if (recordLength) {
        // 查找是否已有该key的记录
        let condition = {};
        condition['atId'] = _id;
        const res = await findOneRecord(condition);
        if (res.length == 0 && recordLength >= LRUCacheLength) {
            // 排序历史记录并删除最后一个
            let lastId = sortAndReturnLastId(allRecords);
            let delRes = await deleteRecordById(lastId);
            if (delRes) {
                await next();
            }
        } else {
            await next();
        }
    } else {
        // 空的历史记录表，直接存
        await next();
    }
};

const sortAndReturnLastId = function (allRecords) {
    allRecords.sort((a, b) => {
        if (a.count != b.count) {
            return b.count - a.count;
        } else {
            return b.clickTime - a.clickTime;
        }
    });
    let lastId = allRecords[allRecords.length - 1]._id;
    return lastId;
};

module.exports = { LRUValidator };
