const express = require('express');
const cors = require('cors');
const employeeRoutes = require('./routes/employeeRoutes');
const { connectToDatabase } = require('./controllers/dbController'); // Import database connection logic

const app = express();

app.use(cors());
app.use(express.json());


connectToDatabase();

app.use('/api/employeeManagement', employeeRoutes);


app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    message: error.message
  });
});

module.exports = app;
