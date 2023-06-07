// // // IMPORTS

// // // ROUTE HANDLERS

// // CREATE

exports.createContact = async (req, res) => {
  try {
    res
      .status(201)
      .json({ status: 'success', contact: 'Create Contact Route' });
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error });
  }
};

// // READ

exports.getAllContacts = async (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      results: 'Contact Results Length Placeholder',
      contact: 'Get All Contacts Route',
    });
  } catch (error) {
    res.status(404).json({ status: 'fail', message: error });
  }
};

exports.getContactById = async (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      contact: 'getContactById Route',
    });
  } catch (error) {
    res.status(404).json({ status: 'fail', message: error });
  }
};

// // UPDATE

exports.updateContact = async (req, res) => {
  try {
    res
      .status(200)
      .json({ status: 'success', contact: 'Update Contact Route' });
  } catch (error) {
    res.status(404).json({ status: 'fail', message: error });
  }
};

// // DELETE

exports.deleteContact = async (req, res) => {
  try {
    res
      .status(204)
      .json({ status: 'success', contact: 'Delete Contact Route' });
  } catch (error) {
    res.status(404).json({ status: 'fail', message: error });
  }
};
