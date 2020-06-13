/*
 * @Description: app api 处理入口
 * @Author: Looper
 * @Date: 2020-05-31 21:14:03
 * @LastEditors: Looper
 * @LastEditTime: 2020-06-13 22:06:41
 * @FilePath: /nodejs/blog-1/app.js
 */
const querystring = require("querystring");
const { get, set } = require("./src/db/redis");
const { access, error, event } = require("./src/utils/log")
const handleBlogRouter = require("./src/router/blog");
const handleUserRouter = require("./src/router/user");

// 设置cookie的过期时间
const getCookieExpires = () => {
  const d = new Date();
  d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
  console.log('d.toGMTString() is ', d.toGMTString());
  return d.toGMTString();
}

// session数据
const SESSION_DATA = {};

const getPostData = (req) => {
  return new Promise((resolve, reject) => {
    if (req.method !== "POST") {
      resolve({});
      return;
    }

    if (req.headers["content-type"] !== "application/json") {
      resolve({});
      return;
    }

    let postData = "";
    req.on("data", (chunk) => {
      postData += chunk.toString();
    });
    req.on("end", () => {
      if (!postData) {
        resolve({});
        return;
      }
      resolve(JSON.parse(postData));
    });
  });
};

const serverHandle = (req, res) => {
  // 记录access log
  access(`${req.method} -- ${req.url} -- ${req.headers["user-agent"]} -- ${Date.now()}`);

  res.setHeader("Content-Type", "application/json");
  // 获取path
  const url = req.url;
  req.path = url.split("?")[0];

  // 解析query
  req.query = querystring.parse(url.split("?")[1]);

  // 解析cookie
  req.cookie = {};
  const cookieStr = req.headers.cookie || "";
  cookieStr.split(";").forEach(item => {
    if (!item) {
      return
    }
    const arr = item.split("=");
    const key = arr[0].trim();
    const val = arr[1].trim();
    req.cookie[key] = val;
  });

  // 解析session使用redis
  let needSetCookie = false;
  let userId = req.cookie.userid;
  if (!userId) {
    needSetCookie = true;
    userId = `${Date.now()}_${Math.random()}`;
    // 初始化session
    set(userId, {});
  }
  // 获取session
  req.sessionId = userId;
  get(req.sessionId).then(sessionData => {
    if (sessionData == null) {
      // 初始化redis中的session
      set(req.sessionId, {});
      // 设置session
      req.session = {}
    } else {
      // 设置session
      req.session = sessionData;
    }
    console.log("req.session", req.session);
    // 处理post data
    return getPostData(req);
  }).then((postData) => {
    req.body = postData;

    // 处理blog路由
    const blogResult = handleBlogRouter(req, res);
    if (blogResult) {
      blogResult.then(blogData => {
        if (needSetCookie) {
          res.setHeader("Set-Cookie", `userid=${userId};path=/; httpOnly;expires=${getCookieExpires()}`)
        }
        res.end(JSON.stringify(blogData));
      });
      return;
    }

    // 处理user路由
    const userResult = handleUserRouter(req, res);
    if (userResult) {
      userResult.then(userData => {
        if (needSetCookie) {
          res.setHeader("Set-Cookie", `userid=${userId};path=/; httpOnly;expires=${getCookieExpires()}`)
        }
        res.end(JSON.stringify(userData));
      });
      return;
    }

    res.writeHead(404, { "Content-type": "text/plain" });
    res.write("404 NOT FOUND!");
    res.end();
  });
};

module.exports = serverHandle;
