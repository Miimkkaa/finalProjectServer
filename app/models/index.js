const Sequelize = require("sequelize");
const sequelize = new Sequelize('finalProject', 'mimi@mimiservermysql', 'Mysqlpass1234!', {
  host: "mimiservermysql.mysql.database.azure.com",
  dialect: "mysql",
  port: 3306
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./item.model.js")(sequelize, Sequelize);

module.exports = db;