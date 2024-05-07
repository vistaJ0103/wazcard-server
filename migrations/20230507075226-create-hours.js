"use strict"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("hours", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cid: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      label: {
        type: Sequelize.STRING(25),
      },
      from: {
        type: Sequelize.STRING(25),
      },
      to: {
        type: Sequelize.STRING(25),
      },
      isOpen: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("hours")
  },
}
