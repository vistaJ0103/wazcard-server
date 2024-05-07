const sendToken = (res, statusCode, message, user, token) => {
    res.status(statusCode).json({
        status: statusCode,
        message,
        user,
        token
    });
}

module.exports = sendToken;