"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class payments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  payments.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      step1: {
        type: DataTypes.STRING,
      },
      step2: {
        type: DataTypes.STRING,
      },
      step3: {
        type: DataTypes.STRING,
      },
      step4: {
        type: DataTypes.STRING,
      },
      step5: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.INTEGER,
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
      modelName: "payments",
    },
  );
  return payments;
};
