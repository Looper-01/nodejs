/*
 * @Description: db config
 * @Author: Looper
 * @Date: 2020-06-01 10:36:38
 * @LastEditors: Looper
 * @LastEditTime: 2020-06-07 17:30:51
 * @FilePath: /nodejs/blog-1/src/config/db.js
 */
const env = process.env.NODE_ENV; // 环境变量

// mysql 配置
let MYSQL_CONF;
let REDIS_CONF;

// dev
if (env === 'dev') {
  // mysql
  MYSQL_CONF = {
    host: "localhost",
    user: "root",
    password: "truth",
    port: 3306,
    database: "myblog"
  }
  //redis
  REDIS_CONF = {
    port: 6379,
    host: "127.0.0.1"
  }
}

// prd
if (env === "production") {
  // mysql
  MYSQL_CONF = {
    host: "localhost",
    user: "root",
    password: "truth",
    port: 3306,
    database: "myblog"
  };
  // redis
  REDIS_CONF = {
    port: 6379,
    host: "127.0.0.1"
  }
}

// 导出配置
module.exports = {
  MYSQL_CONF,
  REDIS_CONF
}