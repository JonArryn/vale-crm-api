// // // IMPORTS
const Company = require('../model/companyModel');

// const catchAsync = require('../util/catchAsync');

// // // ROUTE HANDLERS

// // CREATE
exports.createCompany = async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res
      .status(201)
      .json({ status: 'success', requestedAt: req.requestTime, data: company });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      requestedAt: req.requestTime,
      message: error.message,
    });
  }
};

// // READ
exports.getAllCompanies = async (req, res, next) => {
  try {
    const [companies, paginationObj] = await Company.find(req.query);

    res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      pagination: paginationObj,
      data: companies,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      requestedAt: req.requestTime,
      message: error.message,
    });
  }
};

exports.getCompanyById = async (req, res) => {
  try {
    const [company] = await Company.findById(req.params.id);

    res
      .status(200)
      .json({ status: 'success', requestedAt: req.requestTime, data: company });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      requestedAt: req.requestTime,
      message: error.message,
    });
  }
};
// // UPDATE

exports.updateCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      company: company,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      requestedAt: req.requestTime,
      message: error.message,
    });
  }
};

// // DELETE

exports.deleteCompany = async (req, res) => {
  try {
    await Company.deleteById(req.params.id);
    res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      company: 'Delete Company Route',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      requestedAt: req.requestTime,
      message: error.message,
    });
  }
};
