const express = require('express');
const TABLES = require('../constant/TABLES');
const checkId = require('../middleware/checkId');

const countryController = require('../controller/countryController');

const router = express.Router();

router.route('/').get(countryController.getAllCountries);

router
  .route('/:id')
  .all(checkId(TABLES.COUNTRY))
  .get(countryController.getCountryById);

module.exports = router;
