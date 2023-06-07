require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const AppError = require('./util/appError');
const globalErrorHandler = require('./controller/errorController');

// // // TODO
// // Create API version routes

// creates our instance of express
const app = express();

// // // ROUTER IMPORTS

const contactRouter = require('./endpoint/contact/contactRoutes');
const userRouter = require('./endpoint/user/userRoutes');
const companyRouter = require('./endpoint/company/companyRoutes');
const countryRouter = require('./endpoint/country/countryRoute');
const countryDivisionRouter = require('./endpoint/countrydivision/countryDivisionRoutes');
const addressRouter = require('./endpoint/address/addressRoutes');

// // // MIDDLEWARE

if (process.env.NODE_ENV === 'development') {
  // logging
  app.use(morgan('dev'));
}
// // global middleware

// body parser middleware (called by app.use())
app.use(express.json());

// appends time of request to request object
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// cors?
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

// // // ROUTERS (still middleware)

// // contact router

// mounts router as middleware
// defines parent route that uses created router
// must be mounted after routes are defined
app.use(`/api/v1/contact`, contactRouter);

// // user router
app.use(`/api/v1/user`, userRouter);

// // company router
app.use('/api/v1/company', companyRouter);

app.use('/api/v1/country', countryRouter);

app.use('/api/v1/countrydivision', countryDivisionRouter);

app.use('/api/v1/address', addressRouter);

// universal handler if request was not found and doesn't reach any other route
// universal "Not Found"
app.all('*', (req, res, next) => {
  next(
    new AppError(
      `${req.originalUrl} was not found, check the request URL and try again`,
      404
    )
  );
});

app.use(globalErrorHandler);

module.exports = app;
