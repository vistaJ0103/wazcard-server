const jwt = require("jsonwebtoken");
const json = require("../utils/jsonresponse");
const Users = require("../models").users;

exports.isAuthenticated = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  try {
    const token = authHeader && authHeader.split(" ")[1];
    console.log("tokenddd", token);
    if (!token) return json(res, 403, `Forbidden123 request.`);

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log(`decode: `, decode);
    req.user = await Users.findByPk(decode.id);
    req.token = token;
    next();
  } catch (error) {
    json(res, 403, `Forbidden333 request.`);
  }
};

exports.isAuthorized = (...type) => {
  return (req, res, next) => {
    if (!type.includes(req.user.type)) {
      json(res, 401, `Unauthorized request.`);
      return next();
    }
    next();
  };
};
