const express = require('express');
const TABLES = require('../constant/TABLES');

const companyController = require('../controller/companyController');
const companyValidator = require('../middleware/companyValidator');
const checkId = require('../middleware/checkId');

const router = express.Router();

router
  .route('/')
  .get(companyController.getAllCompanies)
  .post(companyValidator.validateBody, companyController.createCompany);
// fire this up for restoring from trash
// make a centralized delete/restore controller for all tables
// router.route('/:id/restore').post(checkId(TABLES.COMPANY, true));
router
  .route('/:id')
  .all(checkId(TABLES.COMPANY))
  .get(companyController.getCompanyById)
  .put(companyValidator.validateBody, companyController.updateCompany)
  .delete(companyController.deleteCompany);

module.exports = router;
