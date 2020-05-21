// const db = require("../models");
// const CartItem = db.CartItem;

module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('item', {
    itemId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'ItemId'
    },
    itemName: {
      type: DataTypes.STRING(20),  
      allowNull: true,
      field: 'ItemName'
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'Description'
    },
    picture: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'Picture'
    },
    price: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'Price'
    },
    inStock: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      field: 'InStock'
    }
  }, {
    tableName: 'item',
    timestamps: false
  });

  Item.associate = models => {
    Item.belongsTo(models.CartItem,{
      as: 'cartitem',
      foreignKey: 'item_id'
    });
  };

  return Item;
};
