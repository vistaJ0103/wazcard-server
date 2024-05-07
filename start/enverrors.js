const winston = require('winston');

module.exports = function () {

    if (process.env.DB === undefined) winston.error('DB is not defined')
    if (process.env.JWT_SECRET === undefined) winston.error('JWT_KEY is not defined')
    if (process.env.JWT_EXPIRE === undefined) winston.error('JWT_EXPIRE is not defined')
    if (process.env.COOKIE_EXPIRE === undefined) winston.error('COOKIE_EXPIRE is not defined')
    // if (process.env.SMPT_HOST === undefined) winston.error('SMPT_HOST is not defined')
    // if (process.env.SMPT_PORT === undefined) winston.error('SMPT_PORT is not defined')
    // if (process.env.SMPT_PASSWORD === undefined) winston.error('SMPT_PASSWORD is not defined')
}