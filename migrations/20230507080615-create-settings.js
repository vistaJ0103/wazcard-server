"use strict"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("settings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cid: {
        type: Sequelize.INTEGER,
      },
      logo: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      cover_photo: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      bg_image: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      like_button: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      title: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      slogan: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      icons: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      hours: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      reviews: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      gallery: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      floating: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
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
    await queryInterface.dropTable("settings")
  },
}
