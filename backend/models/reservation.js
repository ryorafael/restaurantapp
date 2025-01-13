const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const User = require("./User");

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
      references: {
        model: User,
        key: "id",
      },
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
  },
  {
    tableName: "Reservations", // Ensure it matches the table name
    createdAt: "created_at", // Map createdAt to created_at
    updatedAt: false, // Disable updatedAt since it's missing
  }
);

Reservation.belongsTo(User, { foreignKey: "user_id", as: "user" });

module.exports = Reservation;
