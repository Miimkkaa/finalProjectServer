const db = require("../models");
const CartItem = db.CartItem;
const Item = db.Item;
const Op = db.Sequelize.Op;

// Create and Save a new cartitem
exports.create = (req, res) => {
  // Validate request
  if (!req.body.cartId) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a cartitem
  const cartitem = {
    cartId: req.body.cartId,
    itemId: req.body.itemId,
  };

  // Save cartitem in the database
  CartItem.create(cartitem)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the cartitem."
      });
    });
};

// Retrieve all cartitems from the database.
exports.findAll = (req, res) => {
// const itemname = req.query.itemname;
  // var condition =  itemname ? { itemname: { [Op.like]: `%${itemname}%` } } : null;
  
    CartItem.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving cartitems."
        });
      });
  
};

// Find a single cartitem with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    CartItem.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving cartitem with id=" + id
        });
      });
  
};

// Update a cartitem by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    CartItem.update(req.body, {
      where: { cartItemId: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "cartitem was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update cartitem with id=${id}. Maybe cartitem was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating cartitem with id=" + id
        });
      });
  
};

// Delete a cartitem with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    CartItem.destroy({
      where: { cartItemId: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "cartitem was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete cartitem with id=${id}. Maybe cartitem was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete cartitem with id=" + id
        });
      });
  
};

// Delete all cartitems from the database.
exports.deleteAll = (req, res) => {
    CartItem.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} cartitems were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all cartitems."
          });
        });
};

exports.findItems = (req, res) => {
  const id = req.params.id;
  const query = 'select CartItemId, ItemName, Description, Price, Picture from item, cartitem where item.ItemId = cartitem.ItemId and cartitem.CartId = ' + id;

  const Sequelize = require("sequelize");
  const sequelize = new Sequelize('UfnQOHd1ON', 'UfnQOHd1ON', 'cS2PAPWiz4', {
    host: "remotemysql.com",
    dialect: "mysql",
    });

    sequelize.query(query,{type: Sequelize.QueryTypes.SELECT})
          .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving items."
          });
  });


      // CartItem.findAll({
      //   include: [{
      //     model: Item,
      //     as: 'Item',
      //     where: {cartId: req.params.id}
      //   }]
      // })
      //   .then(data => {
      //     console.log(data);
      //   })
      //   .catch(err => {
      //     res.status(500).send({
      //       message:
      //         err.message || "Some error occurred while retrieving cartitems."
      //     });
      //   });
    
  };