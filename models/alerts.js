"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class alerts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      alerts.belongsTo(models.users, { foreignKey: "user_id" });
    }
  }
  alerts.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        type: DataTypes.INTEGER,
      },
      imageUrl: {
        type: DataTypes.STRING,
      },
      imagePublicId: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      count: {
        type: DataTypes.INTEGER,
      },
      date: {
        type: DataTypes.DATE,
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
      modelName: "alerts",
    }
  );
  return alerts;
};
