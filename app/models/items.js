/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('items', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    itemname: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'itemname'
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'description'
    },
    picture: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'picture'
    },
    price: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'price'
    },
    instock: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'instock'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'createdAt'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updatedAt'
    }
  }, {
    tableName: 'items'
  });
};
