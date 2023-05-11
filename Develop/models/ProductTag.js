const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    // id - integer, not null, pk, auto increment
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // product_id - integer, references the Product id
    product_id:{
      type: DataTypes.INTEGER,
      references:{
        model:'product',
        key: 'id',
        unique: false
      }
    },
    // tag_id - integer, references the Tag id
    tag_id:{
      type: DataTypes.INTEGER,
      references:{
        model:'tag',
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
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
