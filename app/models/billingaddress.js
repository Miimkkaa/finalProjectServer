/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('billingaddress', {
    billingId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'BillingId'
    },
    fullName: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'FullName'
    },
    zipCode: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'ZipCode'
    },
    street: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'Street'
    },
    city: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'City'
    },
    country: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'Country'
    }
  }, {
    tableName: 'billingaddress',
    timestamps: false
  });
};
