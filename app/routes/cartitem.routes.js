module.exports = app => {
    const cartitem = require("../controllers/cartitem.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", cartitem.create);
  
    // Retrieve all cartitem
    router.get("/", cartitem.findAll);
  
    // Retrieve all published cartitem
    router.get("/published", cartitem.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", cartitem.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", cartitem.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", cartitem.delete);
  
    // Create a new Tutorial
    router.delete("/", cartitem.deleteAll);
  
    app.use('/api/cartitem', router);
  };