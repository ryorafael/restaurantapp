module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      role: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "user",
      },
    });
  },
  down: async (queryInterface) => {
    // Drop foreign key first
    await queryInterface.removeConstraint(
      "reservations",
      "reservations_ibfk_1"
    );
    // Drop Users table
    await queryInterface.dropTable("Users");
  },
};
