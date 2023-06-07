const CountryDivision = require('../model/countryDivisionModel');

exports.getAllCountryDivisions = async (req, res) => {
  try {
    const [divisions, paginationObj] = await CountryDivision.find(req.query);

    res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      pagination: paginationObj,
      data: divisions,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      requestedAt: req.requestTime,
      message: error.message,
    });
  }
};

exports.getCountryDivisionById = async (req, res) => {
  try {
    const [countryDivision] = await CountryDivision.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      data: countryDivision,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      requestedAt: req.requestTime,
      message: error.message,
    });
  }
};
