const express = require('express');

const companyController = require('../controller/companyController');

const router = express.Router();

router
  .route('/')
  .get(companyController.getAllCompany)
  .post(companyController.createCompany);
router
  .route('/:id')
  .get(companyController.getCompany)
  .patch(companyController.updateCompany)
  .delete(companyController.updateCompany);

module.exports = router;
