/*
 * @Description: 测试nodejs连接mysql
 * @Author: Looper
 * @Date: 2020-06-01 10:12:11
 * @LastEditors: Looper
 * @LastEditTime: 2020-06-01 22:54:10
 * @FilePath: /nodejs/mysql-test/index.js
 * @Url: 
 */
const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "truth",
  port: 3306,
  database: "myblog"
})

con.connect();

// const sql = "update users set realname ='张叁' where username = 'zhangsan'; ";
// const  sql = "select * from users;"
// const sql = "insert into blogs(title,content,author,createtime) values ('测试标题C','测试内容C','lisi','1591021908463')"
const sql = "update blogs set title = '标题B', content = '内容B', author = 'lisi' where id = 2;"
con.query(sql, (err, result) => {
  if (err) {
    console.error(err)
    return
  }

  console.log(result)
})

con.end()