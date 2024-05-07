"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class businesses extends Model {}

  businesses.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      s1_title: {
        type: DataTypes.STRING,
      },
      s1_description: {
        type: DataTypes.STRING,
      },
      s3_title: {
        type: DataTypes.STRING,
      },
      s3_description: {
        type: DataTypes.STRING,
      },
      s2_title: {
        type: DataTypes.STRING,
      },
      s2_description: {
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
      modelName: "businesses",
    }
  );

  return businesses;
};
