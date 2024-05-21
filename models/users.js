"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define associations here
      users.hasOne(models.cards, { foreignKey: "id" });
      users.hasOne(models.alerts, { foreignKey: "id" });
    }
  }

  users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.TEXT,
      },
      password: {
        type: DataTypes.TEXT,
      },
      avatar: {
        type: DataTypes.TEXT,
      },
      avatar_public_id: {
        type: DataTypes.TEXT,
      },
      type: {
        type: DataTypes.TEXT,
      },
      resetCode: {
        type: DataTypes.INTEGER,
      },
      emailVerified: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.TEXT,
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
      modelName: "users",
    }
  );

  return users;
};
