const Sequelize = require("sequelize");
const sequelize = new Sequelize('UfnQOHd1ON', 'UfnQOHd1ON', 'cS2PAPWiz4', {
  host: "remotemysql.com",
  dialect: "mysql",
  port: 3306
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Customer = require("../models/customer")(sequelize, Sequelize);
db.Item = require("../models/item")(sequelize, Sequelize);

module.exports = db;






