"use strict"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING(60),
      },
      email: {
        type: Sequelize.STRING(60),
      },
      password: {
        type: Sequelize.STRING(100),
      },
      avatar: {
        type: Sequelize.STRING,
      },
      avatar_public_id: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING(25),
      },
      resetCode: {
        type: Sequelize.INTEGER,
      },
      emailVerified: {
        type: Sequelize.BOOLEAN,
      },
      status: {
        type: Sequelize.STRING(25),
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
    await queryInterface.dropTable("users")
  },
}
