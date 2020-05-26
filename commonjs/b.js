/*
 * @Description:
 * @Author: Looper
 * @Date: 2020-05-26 22:48:51
 * @LastEditors: Looper
 * @LastEditTime: 2020-05-26 22:59:30
 * @FilePath: /nodejs/commonjs/b.js
 * @Url:
 */

const { add, mul } = require('./a');
/**
 * 如上写法为ES6的结构语法，类似于如下写法：
 * const opts = require("./a");
 * const add = opts.add;
 * const mul = opts.mul;
 */

const sum = add(10, 20)
const result = mul(100, 300);
console.log(sum);
console.log(result);

// 使用lodash
const _ = require('lodash');
const arr = _.concat([1, 2], 3);
console.log("arr...", arr)