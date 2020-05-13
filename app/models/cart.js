/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cart', {
    cartId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'CartId'
    },
    customerId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'customer',
        key: 'CustomerId'
      },
      field: 'CustomerId'
    },
    cartItemId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'cartitemid',
        key: 'CartItemId'
      },
      field: 'CartItemId'
    },
    totalPrice: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'TotalPrice'
    }
  }, {
    tableName: 'cart',
    timestamps: false
  });
};
