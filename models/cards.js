"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cards extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cards.hasOne(models.settings, { foreignKey: "cid", as: "settings" });
      cards.hasMany(models.galleries, { foreignKey: "cid" });
      cards.hasMany(models.hours, { foreignKey: "cid" });
      cards.hasMany(models.icons, { foreignKey: "cid" });
      cards.hasMany(models.reviews, { foreignKey: "cid" });
      cards.hasMany(models.bookings, { foreignKey: "cid" });
      cards.belongsTo(models.reviews, { foreignKey: "id" });
      cards.belongsTo(models.languages, { foreignKey: "lang_id" });
      cards.belongsTo(models.users, { foreignKey: "uid" });
      cards.hasMany(models.card_views, { foreignKey: "cid" });
    }
  }
  cards.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      uid: {
        type: DataTypes.INTEGER,
      },
      lang_id: {
        type: DataTypes.INTEGER,
      },
      logo: {
        type: DataTypes.STRING,
      },
      logo_public_id: {
        type: DataTypes.STRING,
      },
      cover_photo: {
        type: DataTypes.STRING,
      },
      cover_public_id: {
        type: DataTypes.STRING,
      },
      bg_image: {
        type: DataTypes.STRING,
      },
      bg_image_public_id: {
        type: DataTypes.STRING,
      },
      likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      title: {
        type: DataTypes.STRING,
        unique: true,
      },
      URL_title: {
        type: DataTypes.STRING,
      },
      slogan: {
        type: DataTypes.STRING,
      },
      text_color: {
        type: DataTypes.STRING,
        defaultValue: "#FFFFFF",
      },
      cover_color: {
        type: DataTypes.STRING,
        defaultValue: "#2d2d2d",
      },
      bg_color: {
        type: DataTypes.STRING,
        defaultValue: "#2d2d2d",
      },
      hours_bg: {
        type: DataTypes.STRING,
        defaultValue: "#383838",
      },
      reviews_bg: {
        type: DataTypes.STRING,
        defaultValue: "#383838",
      },
      number: {
        type: DataTypes.STRING,
      },
      floating_bg: {
        type: DataTypes.STRING,
        defaultValue: "#242424",
      },
      floating_icon: {
        type: DataTypes.STRING,
      },
      floating_public_id: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
      },
      bill: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      views: {
        type: DataTypes.INTEGER,
      },
      deviceName: {
        type: DataTypes.STRING,
      },
      country: {
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
      modelName: "cards",
    }
  );
  return cards;
};
