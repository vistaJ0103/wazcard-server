"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class galleries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      galleries.belongsTo(models.cards, { foreignKey: "cid" })
    }
  }
  galleries.init(
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
      priority: {
        type: DataTypes.INTEGER,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      public_id: {
        type: DataTypes.STRING,
        allowNull: false,
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
      modelName: "galleries",
    },
  )
  return galleries
}
