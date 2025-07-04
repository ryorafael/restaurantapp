const { time } = require("console");

module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define(
    "Reservation",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      time: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      party_size: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      guest_email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      guest_phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "reservations",
      createdAt: "created_at",
      updatedAt: false,
      timestamps: true,
    }
  );

  return Reservation;
};
