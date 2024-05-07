"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class workings extends Model {}

  workings.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      s1_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      s1_description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      s2_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      s2_description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      s3_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      s3_description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      s4_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      s4_description: {
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
      modelName: "workings",
    }
  );

  return workings;
};
