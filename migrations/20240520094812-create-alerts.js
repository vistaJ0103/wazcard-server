"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("alerts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      imageUrl: {
        type: Sequelize.STRING,
      },
      imagePublicId: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("alerts");
  },
};
