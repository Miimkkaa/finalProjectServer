module.exports = (app) => {
    const customer = require("../controllers/customer.controller.js");
  
    var router = require("express").Router();
  
    // Get all users
    router.get("/", customer.findAll);
  
    // Create a new user
    router.post("/", customer.create);
  
    // Get user by id
    router.get("/:id", customer.findOne);
  
    // Update user information with id
    router.put("/:id", customer.update);
  
    // Delete all users
    router.delete("/", customer.deleteAll);
  
    // Delete a user by id
    router.delete("/:id", customer.delete);
  
    // Login check
    router.get("/login/:username/:pass", customer.login);
  
    app.use("/api/customer", router);
  };
  