const Country = require('../model/countryModel');

exports.getAllCountries = async (req, res) => {
  try {
    const [countries, paginationObj] = await Country.find(req.query);

    res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      pagination: paginationObj,
      data: countries,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      requestedAt: req.requestTime,
      message: error.message,
    });
  }
};

exports.getCountryById = async (req, res) => {
  try {
    const [country] = await Country.findById(req.params.id);
    res
      .status(200)
      .json({ status: 'success', requestedAt: req.requestTime, data: country });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      requestedAt: req.requestTime,
      message: error.message,
    });
  }
};
