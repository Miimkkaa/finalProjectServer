/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cartitem', {
    cartItemId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'CartItemId'
    },
    itemId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'item',
        key: 'ItemId'
      },
      field: 'ItemId'
    },
    quantity: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'Quantity'
    },
    qPrice: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'QPrice'
    }
  }, {
    tableName: 'cartitem'
  });
};
