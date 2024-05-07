const winston = require('winston');

module.exports = function (err, req, res, next) {
    winston.error(err.message, err)
    err.statusCode = err.statusCode || 500;

    //wrong jwt or JWT expire error
    if (err.name === "JsonWebTokenError" || err.name === "TokenExpiredError") {
        err.message = `Forbidden Request`;
        err.statusCode = 403;
    }

    res.status(err.statusCode).json({
        status: err.statusCode,
        message: err.message
    });
}