const cloudinary = require("cloudinary").v2;
const json = require("../utils/jsonresponse");
const sendToken = require("../utils/jwttoken");
const User = require("../models").users;
const Helpers = require("../helper/functions");

const avatarBase64 = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAAMFBMVEX////MzMzv7+/Jycny8vL7+/vV1dXPz8/e3t7S0tLa2trs7Oz4+Pji4uLo6Ojl5eVXon0pAAACyklEQVRoge2a27pDMBCFGyqqRN//bXfQKkrMkjVxsa0rd/83MafM5Ha7dOnSpUv/RI1XeqizJu9lrLun47481Yzy365IwnVT7Af+0Odm5Q+3Z5taGexWuT1b1+znJtijreLftgGwR1dq6DC4QyuBQ0f9OXAVcLsL9minAG4EYI9WSGhWAjaG/6trkcne6BebXMrAxpTk0JK4l47RYpPZRmdik73RGZO8n0QmejLJANeL2CNJQ4p/3A+MTKzUgGd3KnlkyGQvGviOkmllA3Mw/6Np3eALJbcs8nbDuUGmpW4sqJidyQMDEwP6eRr5vNM+z8POiyp5K/Qm0zIJmj15TbesyZ+I14mdVqvQ+ky8Z0ANILUnwcKKF1RYu22IjYF3bghMvWRALka9yCIuxp0bIJ0Y916F/GjyBbqSk6kXOiSieYVqEFA02INA4WiIftjAbIg+ECuEyURh/ihrA7nBPKgQmawy7ZUElsbY8yYpGzndsQcJWlAd8L6TKZ11p509BrELgtAq8/xRoWqZq65HQ5lMa3HzVqBOK0XUR9slS/c3B8manh0mKy9jzyNvexh/XTRTKJ51fTt0tWMvquYK9YGqPzpcJ4mj/B+FuHp9gaD9VFp8S251OXNVNUrY6vPdTDp1ZReOZu9ZxQRtmScOTaVyQ6tatUEnrhWjCS1alNuzbaSnNbU9wu3Z5eN+MJE3mauOYgd2XtoWpjetNb8P0I7RHUDPLIP6pZun7Fbdrr96i6OX+wkGDiEpe2fqXVQ63IEdiDRwjg2zNws4upfC0RtPBdXBW2j4NcEx9IpzJeCa1QsBthmKQC/PO8lZ91o6uHiWG62F0UUyk5edGrpWj9H8LgLsKaI1G9jBG+Yo8rR2oC8J4jSdX6Xz7E6TmV2i/DWSv3ksXRoZ9E3e6COZaI3HnTKmOo1TuwOHncfp493NHVYmVb0un7v/AGboIsAURuPGAAAAAElFTkSuQmCC`;

exports.register = async (req, res) => {
  try {
    const check = await Helpers.findUserByEmail(req.body.email);

    if (check) {
      json(res, 409, "Already registered");
    } else {
      const avatar = await cloudinary.uploader.upload(avatarBase64, {
        folder: "wazcard/avatar",
        resource_type: "image",
      });
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: Helpers.encryptData(req.body.password),
        avatar: avatar.secure_url,
        avatar_public_id: avatar.public_id,
        emailVerified: true,
        resetCode: null,
        status: "active",
        type: "user",
      });
      json(res, 201, "Registered successfully");
    }
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.registerAdmin = async (req, res) => {
  try {
    const check = await Helpers.findUserByEmail(req.body.email);

    if (check) {
      json(res, 409, "Already registered");
    } else {
      const avatar = await cloudinary.uploader.upload(avatarBase64, {
        folder: "wazcard/avatar",
        resource_type: "image",
      });
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: Helpers.encryptData(req.body.password),
        avatar: avatar.secure_url,
        avatar_public_id: avatar.public_id,
        emailVerified: true,
        status: "active",
        resetCode: null,
        type: "admin",
      });
      json(res, 201, "Registered successfully");
    }
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.login = async (req, res) => {
  try {
    console.log("dddddddddddddddddd", req.body.email);
    const user = await Helpers.findUserByEmail(req.body.email);
    console.log("eeee", req.body.email);
    if (user) {
      if (user.status !== "active") return json(res, 400, "Account Disabled");
      if (!user.emailVerified) return json(res, 400, "Verfify Your Account");

      let checkPassword = Helpers.compareEncryptedPassword(
        req.body.password,
        user.password
      );

      if (checkPassword) {
        let token = Helpers.generateJwtToken(user.id);
        console.log("token", token);
        sendToken(res, 200, "Login successfully", user, token);
      } else {
        json(res, 404, "Invalid Credentials");
      }
    } else {
      json(res, 404, "User not found");
    }
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.all = async (req, res) => {
  try {
    let data = await User.findAll({
      where: { type: "user" },
      attributes: {
        exclude: ["password", "role", "resetCode"],
      },
    });
    json(res, 200, null, data);
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.me = async (req, res) => {
  try {
    let data = await User.findByPk(req.user.id, {
      attributes: {
        exclude: ["password", "role", "resetCode"],
      },
    });
    json(res, 200, null, data);
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.update = async (req, res) => {
  try {
    let user = await User.findByPk(req.user.id);

    if (user) {
      if (req.body.avatar) {
        await cloudinary.uploader.destroy(user.avatar_public_id);
        const result = await cloudinary.uploader.upload(req.body.avatar, {
          folder: "wazcard/avatar",
          resource_type: "image",
        });
        await User.update(
          {
            avatar: result.secure_url,
            avatar_public_id: result.public_id,
          },
          {
            where: { id: req.user.id },
          }
        );
      }

      await User.update(
        {
          name: req.body.name,
          email: req.body.email,
        },
        {
          where: { id: req.user.id },
        }
      );

      json(res, 200, "Updated successfully");
    } else {
      json(res, 404, "User not found");
    }
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.userById = async (req, res) => {
  try {
    let data = await User.findOne({
      where: { id: req.params.id },
      attributes: {
        exclude: ["password", "role", "resetCode"],
      },
    });
    json(res, 200, null, data);
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.changePassword = async (req, res) => {
  try {
    let user = await Helpers.findUserById(req.user.id);

    let comparePreviousPassword = Helpers.compareEncryptedPassword(
      req.body.prePassword,
      user.password
    );

    if (comparePreviousPassword) {
      await User.update(
        {
          password: Helpers.encryptData(req.body.newPassword),
        },
        {
          where: { id: req.user.id },
        }
      );

      json(res, 200, "Password updated successfully");
    } else {
      json(res, 400, "Previous password is incorrect");
    }
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await Helpers.findUserById(req.user.id);
    if (!user) return json(res, 404, "User not found");
    await cloudinary.uploader.destroy(user.avatar_public_id);
    await User.destroy({ where: { id: req.user.id } });

    json(res, 200, "User deleted");
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    const user = await Helpers.findUserByEmail(req.body.email);
    if (!user) return json(res, 404, "User not found");

    let code = Helpers.generateSixDigitCode();
    Helpers.sendForgotPasswordMail(req.body.email, code);
    await User.update(
      { resetCode: code },
      { where: { email: req.body.email } }
    );

    json(res, 200, "Email sent.");
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.resetPassword = async (req, res) => {
  try {
    let user = await Helpers.findUserByResetCodeAndEmail(
      req.body.code,
      req.body.email
    );

    if (user) {
      // user found
      await User.update(
        {
          password: Helpers.encryptData(req.body.password),
          resetCode: null,
        },
        { where: { resetCode: req.body.code } }
      );

      json(res, 200, "Password reset successfully");
    } else {
      json(res, 400, "Invalid Code");
    }
  } catch (error) {
    json(res, 500, error.message);
  }
};
