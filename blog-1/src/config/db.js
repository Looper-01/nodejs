const env = process.env.NODE_ENV; // 环境变量

// mysql 配置
let MYSQL_CONF

// dev
if (env === 'dev') {
  MYSQL_CONF = {
    host: "localhost",
    user: "root",
    password: "truth",
    port: 3306,
    database: "myblog"
  }
}

// prd
if (env === "production") {
  MYSQL_CONF = {
    host: "localhost",
    user: "root",
    password: "truth",
    port: 3306,
    database: "myblog"
  }
}

// 导出配置
module.exports = {
  MYSQL_CONF
}