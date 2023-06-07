// initialize dotenv npm to manage process.env through config.env file
require('dotenv').config();
// import app
const app = require('./app');

// // // SERVER START

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`app running on port ${port}...`);
});
