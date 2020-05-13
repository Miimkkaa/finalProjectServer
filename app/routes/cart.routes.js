module.exports = (app) => {
    const cart = require("../controllers/cart.controller");
  
    var router = require("express").Router();
  
    // Get all carts
    router.get("/", cart.findAll);
  
    // Create a new cart
    router.post("/", cart.create);
  
    // // Get cart by id
    router.get("/:id", cart.findOne);
  
    // // Update cart information with id
    router.put("/:id", cart.update);
  
    // // Delete all carts
    router.delete("/", cart.deleteAll);
  
    // // Delete a cart by id
    router.delete("/:id", cart.delete);
  
    app.use("/api/cart", router);
  };
  