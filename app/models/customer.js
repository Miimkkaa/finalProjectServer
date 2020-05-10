module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer', {
    customerId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'CustomerId'
    },
    firstName: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'FirstName'
    },
    lastName: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'LastName'
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'Username'
    },
    pass: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'Pass'
    },
    email: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'Email'
    },
    birthDate: {
      type: DataTypes.STRING(40),
      allowNull: true,
      field: 'BirthDate'
    },
    userType: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'UserType'
    },
    billingId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'billingaddress',
        key: 'BillingId'
      },
      field: 'BillingId'
    }
  }, {
    tableName: 'customer'
  });
};
