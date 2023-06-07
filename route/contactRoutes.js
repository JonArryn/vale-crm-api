const express = require('express');
// import controller
const contactController = require('../controller/contactController');
// creates new Router instance and saves it to variable
const router = express.Router();

// // // MIDDLEWARE

// param middleware
// no longer needed but left here to demonstrate that param middleware can be used in route
// router.param('id', contactController.checkId);

// // // ROUTES

// all endpoint requests for route now use newly created router specific to parent route
// now only requires routes be specified after parent route
router
  .route(`/`)
  .get(contactController.getAllContacts)
  .post(contactController.createContact);

router
  .route(`/:id`)
  .get(contactController.getContactById)
  .patch(contactController.updateContact)
  .delete(contactController.deleteContact);

// // // ROUTER EXPORT

module.exports = router;
