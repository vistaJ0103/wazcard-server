"use strict"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("cards", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      uid: {
        type: Sequelize.INTEGER,
      },
      lang_id: {
        type: Sequelize.INTEGER,
      },
      logo: {
        type: Sequelize.STRING,
      },
      logo_public_id: {
        type: Sequelize.STRING,
      },
      cover_photo: {
        type: Sequelize.STRING,
      },
      cover_public_id: {
        type: Sequelize.STRING,
      },
      bg_image: {
        type: Sequelize.STRING,
      },
      bg_image_public_id: {
        type: Sequelize.STRING,
      },
      likes: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      title: {
        type: Sequelize.STRING(100),
      },
      URL_title: {
        type: Sequelize.STRING(100),
      },
      slogan: {
        type: Sequelize.STRING(100),
        defaultValue: "Business Slogan",
      },
      text_color: {
        type: Sequelize.STRING(20),
        defaultValue: "#FFFFFF",
      },
      cover_color: {
        type: Sequelize.STRING(20),
        defaultValue: "#2d2d2d",
      },
      bg_color: {
        type: Sequelize.STRING(20),
        defaultValue: "#2d2d2d",
      },
      hours_bg: {
        type: Sequelize.STRING(20),
        defaultValue: "#383838",
      },
      reviews_bg: {
        type: Sequelize.STRING(20),
        defaultValue: "#383838",
      },
      number: {
        type: Sequelize.STRING(25),
        defaultValue: "",
      },
      floating_bg: {
        type: Sequelize.STRING(20),
        defaultValue: "#242424",
      },
      floating_icon: {
        type: Sequelize.STRING,
      },
      floating_public_id: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING(25),
      },
      views: {
        type: Sequelize.INTEGER,
      },
      deviceName: {
        type: Sequelize.STRING(25),
      },
      country: {
        type: Sequelize.STRING(50),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("cards")
  },
}
