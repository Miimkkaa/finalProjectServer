/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment', {
    paymentId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'PaymentId'
    },
    cartId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'cart',
        key: 'CartId'
      },
      field: 'CartId'
    },
    billingId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'billingaddress',
        key: 'BillingId'
      },
      field: 'BillingId'
    },
    cardName: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'CardName'
    },
    cardNumber: {
      type: DataTypes.STRING(40),
      allowNull: true,
      field: 'CardNumber'
    },
    ccv: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'CCV'
    },
    expiryDate: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'ExpiryDate'
    },
    paid: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      field: 'Paid'
    }
  }, {
    tableName: 'payment',
    timestamps: false
  });
};
