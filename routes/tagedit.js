// 指令标签修改-路由
var express = require('express');
var router = express.Router();

// 导入at控制器方法
const { updateTag } = require('../controller/at.controller');

// {op:1,tag:'需要修改的内容'}
router.put('/:_id', updateTag);
// 示例：
// 新增tag数组元素
// router.put('/:_id', updateTag);
// 删除tag数组元素
// router.put('/:_id', deleteTag);
module.exports = router; // 导出路由
