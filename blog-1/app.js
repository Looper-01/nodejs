const serverHandle = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const resData = {
    name: "Looper",
    site: "https://16pu.top",
    env: process.env.NODE_ENV
  }

  res.end(JSON.stringify(resData));
}

module.exports = serverHandle;