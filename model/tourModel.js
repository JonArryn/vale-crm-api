// initialize mongoose framework
const mongoose = require('mongoose');

// // // SCHEMA

const contactSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, 'First name field is required for contact'],
    },
    last_name: {
      type: String,
      required: [true, 'Last name field is required for contact'],
    },
    company: String,
    title: String,
    phone: Number,
    email: {
      type: String,
      required: [true, 'Email field required for contact'],
      unique: [true, 'Email address for contact must be unique'],
    },
  },
  { collection: 'contact' }
);

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
