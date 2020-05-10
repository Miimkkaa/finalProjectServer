/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item', {
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
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'Picture'
    },
    price: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'Price'
    },
    inStock: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'InStock'
    }
  }, {
    tableName: 'item',
    timestamps: false
  });
};
