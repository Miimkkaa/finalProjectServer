// const db = require("../models");
// const Item = db.Item;

module.exports = (sequelize, DataTypes) => {
  const CartItem = sequelize.define('cartitem', {
    cartItemId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'CartItemId'
    },
    cartId:{
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'cart',
        key: 'CartId'
      },
      field: 'CartId'
    },
    itemId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'item',
        key: 'ItemId'
      },
      field: 'ItemId'
    }
  }, {
    tableName: 'cartitem',
    timestamps: false

  });

  CartItem.associate = models => { 
    CartItem.hasMany(models.Item,{
      as: 'item',
      foreignKey: 'itemId',
    })
  }

  return CartItem;
};
