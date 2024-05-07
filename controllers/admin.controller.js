const json = require("../utils/jsonresponse")
const { Op, Sequelize } = require("sequelize")
const User = require("../models").users
const Card = require("../models").cards

exports.toggleUserStatus = async (req, res) => {
  try {
    let check = await User.findByPk(req.body.id)

    if (check) {
      await User.update(
        {
          status: req.body.status,
        },
        {
          where: { id: req.body.id },
        },
      )

      json(res, 200, "Updated successfully")
    } else {
      json(res, 404, "User not found")
    }
  } catch (error) {
    json(res, 500, error.message)
  }
}

exports.toggleCardStatus = async (req, res) => {
  try {
    let check = await Card.findByPk(req.body.id)

    if (check) {
      await Card.update(
        {
          status: req.body.status,
        },
        {
          where: { id: req.body.id },
        },
      )

      json(res, 200, "Updated successfully")
    } else {
      json(res, 404, "Card not found")
    }
  } catch (error) {
    json(res, 500, error.message)
  }
}

exports.adminReports = async (req, res) => {
  try {
    let totalUsers = await User.count({
      where: { type: "user" },
      attributes: {
        exclude: ["password", "role", "resetCode"],
      },
    })

    let totalCards = await Card.count({})

    let activeCards = await Card.count({ where: { status: "active" } })
    let disabledCards = await Card.count({ where: { status: "inactive" } })

    const cardsByMonth = await Card.findAll({
      attributes: [
        [Card.sequelize.fn("DATE", Card.sequelize.col("createdAt")), "date"],
        [Card.sequelize.fn("COUNT", "*"), "cards"],
      ],
      group: [Card.sequelize.fn("DATE", Card.sequelize.col("createdAt"))],
      raw: true,
    })

    let data = {
      totalCards,
      totalUsers,
      activeCards,
      disabledCards,
      cardsByMonth,
    }

    json(res, 200, null, data)
  } catch (error) {
    json(res, 500, error.message)
  }
}
