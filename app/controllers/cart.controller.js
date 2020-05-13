const db = require("../models");
const Cart = db.Cart;
const Op = db.Sequelize.Op


//Get All
exports.findAll = (req, res) => {

    Cart.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving."
        });
      });
  };

// Update cart information
exports.update = (req, res) => {
    const id = req.params.id;
  
    Cart.update(req.body, {
      where: { cartId: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Cart information was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update cart info with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating cart with id=" + id
        });
      });
  };

// Create and Save a new cart
exports.create = (req, res) => {
    // Validate request
    if (!req.body.totalPrice) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a new customer
    const cart = {
      customerId: req.body.customerId,
      cartItemId: req.body.cartItemId,
      totalPrice: req.body.totalPrice
    };
  
    // Save customer in the database
    Cart.create(cart)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while saving."
        });
      });
  };

// Get cart by id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Cart.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving cart with id=" + id
        });
      });
  };

// Delete all customers
exports.deleteAll = (req, res) => {
    Cart.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} carts were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all carts."
          });
        });
  };

// Delete customer by id
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Cart.destroy({
      where: { cartId: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Cart was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete cart with id=${id}. User was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete cart with id=" + id
        });
      });
  };