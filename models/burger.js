const sequelize = require("sequelize");

// creating our sequelize model for our burger queries
module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define(
    "burger",
    {
      BURGER_NAME: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 15]
        }
      },
      DATE: DataTypes.DATE,
      DEVOURED: DataTypes.BOOLEAN
    },
    {
      timestamps: false
    }
  );
  return burger;
};
