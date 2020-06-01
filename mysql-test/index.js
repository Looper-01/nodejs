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
const  sql = "select * from users;"
con.query(sql, (err, result) => {
  if (err) {
    console.error(err)
    return
  }

  console.log(result)
})

con.end()