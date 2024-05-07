"use strict"

const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class hours extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      hours.belongsTo(models.cards, { foreignKey: "cid" })
    }
  }
  hours.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      cid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      label: {
        type: DataTypes.STRING,
      },
      from: {
        type: DataTypes.STRING,
        defaultValue: "00:00",
      },
      to: {
        type: DataTypes.STRING,
        defaultValue: "00:00",
      },
      isOpen: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "hours",
    },
  )
  return hours
}
