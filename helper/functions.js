var fs = require("fs");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let nodemailer = require("nodemailer");
let smtpTransport = require("nodemailer-smtp-transport");

// User Model
const Card = require("../models").cards;
const Hours = require("../models").hours;
const Settings = require("../models").settings;
const Gallery = require("../models").galleries;
const Icons = require("../models").icons;
const Reviews = require("../models").reviews;
const User = require("../models").users;
const Language = require("../models").languages;

let transporter = nodemailer.createTransport(
  smtpTransport({
    service: process.env.MAIL_SERVICE,
    host: process.env.MAIL_HOST,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  })
);

// find card by name
module.exports.findCardByName = async function (name) {
  return await Card.findOne({ where: { URL_title: name } });
};

// find card by id
module.exports.findCardById = async function (id) {
  return await Card.findOne({ where: { id } });
};

// find settings by cid
module.exports.findSettingsByCid = async function (cid) {
  return await Settings.findOne({ where: { cid } });
};

// find gallery by id
module.exports.findGalleryById = async function (id) {
  return await Gallery.findOne({ where: { id } });
};

// find review by id
module.exports.findReviewById = async function (id) {
  return await Reviews.findOne({ where: { id } });
};

// find icon by id
module.exports.findIconById = async function (id) {
  return await Icons.findOne({ where: { id } });
};

// find icon by card id and priority
module.exports.findIconByCardIdAndPriority = async function (cid, id) {
  return await Icons.findOne({ where: { cid, id } });
};

// find gallery by card id and priority
module.exports.findGalleryByCardIdAndPriority = async function (cid, id) {
  return await Gallery.findOne({ where: { cid, id } });
};

// encrypt data
module.exports.encryptData = function (data) {
  return bcrypt.hashSync(data, 5);
};

// compare encrypt password
module.exports.compareEncryptedPassword = function (
  originalPassword,
  hashPassword
) {
  return bcrypt.compareSync(originalPassword, hashPassword);
};

// generate jwt token
module.exports.generateJwtToken = function (id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// find user by email
module.exports.findUserByEmail = async function (email) {
  return await User.findOne({ where: { email: email } });
};

// find language by name
module.exports.findLanguageByName = async function (name) {
  return await Language.findOne({ where: { name: name } });
};

// find language by id
module.exports.findLanguageById = async function (id) {
  return await Language.findOne({ where: { id: id } });
};

// find user by id
module.exports.findUserById = async function (id) {
  return await User.findOne({ where: { id: id } });
};

// find admin from users
module.exports.findAdminFromUsers = async function () {
  return await User.findOne({ where: { type: "admin" } });
};

// generate 6 digit code
module.exports.generateSixDigitCode = function () {
  return Math.floor(100000 + Math.random() * 900000);
};

// find user by reset code and email
module.exports.findUserByResetCodeAndEmail = async function (code, email) {
  return await User.findOne({ where: { resetCode: code, email: email } });
};

// send forgot password email
module.exports.sendForgotPasswordMail = function (to, code) {
  let mailOptions = {
    from: process.env.MAIL_USERNAME,
    to: to,
    subject: "Forget Password",
    html:
      "<!DOCTYPE html>\n" +
      '<html lang="en">\n' +
      "<head>\n" +
      '    <meta charset="UTF-8">\n' +
      "    <title></title>\n" +
      "</head>\n" +
      "<body>\n" +
      "<p>Your reset password code is <b>" +
      code +
      "</b>. Thanks</p>\n" +
      "</body>\n" +
      "</html>",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      return 1;
    }
  });
};
