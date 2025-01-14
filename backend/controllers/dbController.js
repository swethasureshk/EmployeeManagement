const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://swethasureshkumartech:7a2gjNocPmgvOiN5@prj-sw-db.mn2zn.mongodb.net/employee?retryWrites=true&w=majority&appName=PRJ-SW-DB")
    .then(() => {
      console.log('Connected to database');
    })
    .catch((error) => {
      console.log('Connection failed:', error.message);
    });
};

module.exports = { connectToDatabase };
