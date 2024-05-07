"use strict"

const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class icons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      icons.belongsTo(models.cards, { foreignKey: "cid" })
    }
  }
  icons.init(
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
      icon: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.STRING,
      },
      priority: {
        type: DataTypes.INTEGER,
      },
      public_id: {
        type: DataTypes.STRING,
      },
      value: {
        type: DataTypes.STRING,
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
      modelName: "icons",
    },
  )
  return icons
}
