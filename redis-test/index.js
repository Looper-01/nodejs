/*
 * @Description:redis test
 * @Author: Looper
 * @Date: 2020-06-07 15:02:20
 * @LastEditors: Looper
 * @LastEditTime: 2020-06-07 15:07:05
 * @FilePath: /nodejs/redis-test/index.js
 */

const redis = require("redis");
// 创建客户端
const redisClient = redis.createClient(6379, "127.0.0.1");
redisClient.on("error", err => {
  console.error(err);
});

// 测试
redisClient.set("myname", "looper", redis.print);
redisClient.get("myname", (err, val) => {
  if (err) {
    console.error("err".err);
    return
  }
  console.log("val", val);
  redisClient.quit();
});