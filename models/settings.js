"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class settings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      settings.belongsTo(models.cards, { foreignKey: "cid" });
    }
  }
  settings.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      cid: {
        type: DataTypes.INTEGER,
      },
      logo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      cover_photo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      bg_image: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      like_button: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      title: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      slogan: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      icons: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      hours: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      reviews: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      gallery: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      floating: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      appointment: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
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
      modelName: "settings",
    }
  );
  return settings;
};
