const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    employeeId: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    department: { type: String, required: true },
    designation: { type: String, required: true },
    dateOfJoining: { type: Date, required: true },
    salary: { type: Number, required: true },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zip: { type: String, required: true }
    },
    skills: { type: [String], required: true },
    isActive: { type: Boolean, required: true }
});
module.exports = mongoose.model('Employee', employeeSchema,'employee');