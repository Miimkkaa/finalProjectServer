const db = require("../models");
const Customer = db.Customer;
const Op = db.Sequelize.Op

// Get all people from the database
exports.findAll = (req, res) => {

  Customer.findAll({ })
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

// Create and Save a new person
exports.create = (req, res) => {
  // Validate request
  if (!req.body.FirstName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a new user
  const customer = {
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Username: req.body.Username,
    Pass: req.body.Pass,
    Email: req.body.Email,
    BirthDate: req.body.BirthDate,
    UserType: '1'
  };

  // Save person in the database
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

// Get all by id
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

// Update user information
exports.update = (req, res) => {
  const id = req.params.id;

  Customer.update(req.body, {
    where: { id: id }
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

// Delete all users
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

// Delete user by id
exports.delete = (req, res) => {
  const id = req.params.id;

  Customer.destroy({
    where: { id: id }
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
  const password = req.params.password;

  if (!(username && password)) {
    res.status(400).send({
      message: "Sorry, something went wrong."
    });
  } else {
  /*  res.status(200).send({
      message: "okii."
    }); */
    Customer.findOne({where: { username: username, password: Pass }})
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