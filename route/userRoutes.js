const express = require('express');
// import controller
const userController = require('../controller/userController');
// creates new Router instance and saves it to variable
const router = express.Router();

// // // ROUTES

// // user

// all endpoint requests for route now use newly created router specific to parent route
// now only requires routes be specified after parent route
router
  .route(`/`)
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route(`/:id`)
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

// // // ROUTER EXPORT

module.exports = router;
