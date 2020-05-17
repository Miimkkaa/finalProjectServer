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
    totalPrice: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'TotalPrice'
    },
    paid: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      field: 'Paid'
    },
    customerId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'customer',
        key: 'CustomerId'
      },
      field: 'CustomerId'
    }
  }, {
    tableName: 'cart',
    timestamps: false
  });
};
