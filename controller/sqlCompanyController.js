const Company = require('../model/sqlCompanyModel');

exports.getAllCompanies = async (req, res, next) => {
  try {
    const [companies, _] = await Company.findAll();

    res.status(200).json({
      status: 'success',
      results: companies.length,
      companies: companies,
    });
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error });
  }
};

exports.createNewCompany = async (req, res, next) => {
  try {
    const {
      name,
      phone,
      email,
      address1,
      address2,
      addressCity,
      addressState,
      addressZip,
      addressCountry,
      url,
    } = req.body;
    let company = new Company(
      name,
      phone || '',
      email || '',
      address1 || '',
      address2 || '',
      addressCity || '',
      addressState || '',
      addressZip || '',
      addressCountry || '',
      url || ''
    );
    company = await company.save();

    console.log(company);

    res.status(201).json({ status: 'success', company: company });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: 'fail', message: error });
  }
};

exports.getCompanyById = async (req, res, next) => {
  try {
    let [company, _] = await Company.findById(req.params.id);
    res.status(200).json({ status: 'success', company: company });
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error });
  }
};
