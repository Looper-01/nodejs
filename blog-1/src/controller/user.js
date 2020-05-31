const loginCheck = (username, password) => {
  console.log(username,password)
  return username === "zhangsan" && password === "123";
}

module.exports = {loginCheck}