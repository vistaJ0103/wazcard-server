module.exports = (res, statusCode, message, data) => {
    if (data === null) {
        res.status(statusCode).json({ status: statusCode, message });
    } else if (message === null) {
        res.status(statusCode).json({ status: statusCode, data });
    } else {
        res.status(statusCode).json({ status: statusCode, message, data });
    }
}