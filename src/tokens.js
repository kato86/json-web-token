const { sign } = require("jsonwebtoken");

const createAccessToken = userId => {
  return sign({ userId }, process.env.ACCES_TOKEN_SECRET, {
    expiresIn: "15m"
  });
};

const createRefreshToken = userId => {
  return sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d"
  });
};

const sendAccessToken = (res, req, accestoken) => {
  res.send({
    accestoken,
    email: req.body.email
  });
};

const sendRefreshToken = (res, refreshtoken) => {
  res.cookie("refreshtoken", token, {
    httpOnly: true,
    path: "/refresh_token"
  });
};

module.exports = {
  createAccessToken,
  createRefreshToken,
  sendAccessToken,
  sendRefreshToken
};
