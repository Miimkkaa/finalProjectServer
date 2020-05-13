const db = require("../models");
const Customer = db.Customer;
const Op = db.Sequelize.Op

// Get all customers from the database
exports.findAll = (req, res) => {

  Customer.findAll()
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

// Create and Save a new customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body.firstName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a new customer
  const customer = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    pass: req.body.pass,
    email: req.body.email,
    birthDate: req.body.birthDate,
    userType: '1',
    userType: req.body.userType
  };

  // Save customer in the database
  Customer.create(customer)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while signing up."
      });
    });
};

// Get customer by id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Customer.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};

// Update customer information
exports.update = (req, res) => {
  const id = req.params.id;

  Customer.update(req.body, {
    where: { customerId: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Person information was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update person info with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};

// Delete all customers
exports.deleteAll = (req, res) => {
  Customer.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} people were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all people."
        });
      });
};

// Delete customer by id
exports.delete = (req, res) => {
  const id = req.params.id;

  Customer.destroy({
    where: { customerId: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Person was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete person with id=${id}. User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete people with id=" + id
      });
    });
};

// Login validation
exports.login = (req, res) => {
  const username = req.params.username;
  const password = req.params.pass;

  if (!(username && password)) {
    res.status(400).send({
      message: "Sorry, something went wrong."
    });
  } else {
    Customer.findOne({where: { username: username, pass: password }})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving."
      });
    });
  }
}; 