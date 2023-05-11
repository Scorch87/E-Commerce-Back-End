// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    // id - integer, not null, pk, auto increment
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // product_name - string, not null
    product_name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    // price - decimal, not null, validates that the value is a decimal
    price:{
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate:{
        isDecimal: true,
      },
    },
    // stock - integer, not null, default value of 10, validates that the value is numeric
    stock:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    // category_id - integer, foreign key that references Category id
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
        unique: false
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
