/*
 * @Description:redis connector
 * @Author: Looper
 * @Date: 2020-06-07 17:30:34
 * @LastEditors: Looper
 * @LastEditTime: 2020-06-07 18:24:18
 * @FilePath: /nodejs/blog-1/src/db/redis.js
 */

const redis = require("redis");
const { REDIS_CONF } = require("../config/db");

const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host);

function set(key, val) {
  if (typeof val === "object") {
    val = JSON.stringify(val);
  }
  redisClient.set(key, val, redis.print);
}

function get(key) {
  const promise = new Promise((resolve, reject) => {
    redisClient.get(key, (err, val) => {
      if (err) {
        reject(err);
        return;
      }

      if (val == null) {
        resolve(null);
        return
      }

      // set时，如果val为object，被转成了json
      try {
        // 这里再尝试转回对象
        resolve(JSON.parse(val));
      } catch (error) {
        // 否则直接返回val
        resolve(val);
      }
      resolve(val);
    })
  })
  return promise;
}

module.exports = {
  set,
  get
}