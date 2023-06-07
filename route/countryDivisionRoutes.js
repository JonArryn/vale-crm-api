const express = require('express');
const countryDivisionController = require('../controller/countryDivisionController');
const checkId = require('../middleware/checkId');
const TABLES = require('../constant/TABLES');

const router = express.Router();

router.route('/').get(countryDivisionController.getAllCountryDivisions);

router
  .route('/:id')
  .all(checkId(TABLES.COUNTRY_DIVISION))
  .get(countryDivisionController.getCountryDivisionById);

module.exports = router;
