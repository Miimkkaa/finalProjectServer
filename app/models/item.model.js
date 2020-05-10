module.exports = (sequelize, Sequelize) => {
    const Item = sequelize.define("item", {
      itemname: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      picture: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      instock: {
        type: Sequelize.STRING
      }
    });
  
    return Item;
  };