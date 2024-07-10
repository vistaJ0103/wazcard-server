const json = require("../utils/jsonresponse");
const { Op, Sequelize } = require("sequelize");
const User = require("../models").users;
const Card = require("../models").cards;
const Helpers = require("../helper/functions");
const cloudinary = require("cloudinary").v2;

exports.toggleUserStatus = async (req, res) => {
  try {
    let check = await User.findByPk(req.body.id);

    if (check) {
      await User.update(
        {
          status: req.body.status,
        },
        {
          where: { id: req.body.id },
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
exports.toggleRole = async (req, res) => {
  try {
    let check = await User.findByPk(req.body.id);

    if (check) {
      await User.update(
        {
          type: req.body.type,
        },
        {
          where: { id: req.body.id },
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

exports.changePasswordByAdmin = async (req, res) => {
  try {
    let user = await Helpers.findUserById(req.body.id);

    if (user) {
      await User.update(
        {
          password: Helpers.encryptData(req.body.newPassword),
        },
        {
          where: { id: req.body.id },
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
exports.toggleCardStatus = async (req, res) => {
  try {
    let check = await Card.findByPk(req.body.id);
    let isBill;
    if (req.body.status == "active") {
      isBill = true;
    }
    if (req.body.status == "inactive") {
      isBill = false;
    }
    if (check) {
      await Card.update(
        {
          status: req.body.status,
          bill: isBill,
        },
        {
          where: { id: req.body.id },
        }
      );

      json(res, 200, "Updated successfully");
    } else {
      json(res, 404, "Card not found");
    }
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    console.log("sfsd", req.params.id);
    const user = await Helpers.findUserById(req.params.id);
    if (!user) return json(res, 404, "User not found");
    await cloudinary.uploader.destroy(user.avatar_public_id);
    await User.destroy({ where: { id: req.params.id } });
    json(res, 200, "User deleted");
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.adminReports = async (req, res) => {
  try {
    let totalUsers = await User.count({
      where: { type: "user" },
      attributes: {
        exclude: ["password", "role", "resetCode"],
      },
    });

    let totalCards = await Card.count({});

    let activeCards = await Card.count({ where: { status: "active" } });
    let disabledCards = await Card.count({ where: { status: "inactive" } });

    const cardsByMonth = await Card.findAll({
      attributes: [
        [Card.sequelize.fn("DATE", Card.sequelize.col("createdAt")), "date"],
        [Card.sequelize.fn("COUNT", "*"), "cards"],
      ],
      group: [Card.sequelize.fn("DATE", Card.sequelize.col("createdAt"))],
      raw: true,
    });

    let data = {
      totalCards,
      totalUsers,
      activeCards,
      disabledCards,
      cardsByMonth,
    };

    json(res, 200, null, data);
  } catch (error) {
    json(res, 500, error.message);
  }
};
