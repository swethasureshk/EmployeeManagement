const Employee = require('../models/employee');

// Add Employee
const addEmployee = (req, res, next) => {
  const employee = new Employee({
    employeeId: req.body.employeeId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    department: req.body.department,
    designation: req.body.designation,
    dateOfJoining: req.body.dateOfJoining.$date,
    salary: req.body.salary,
    address: req.body.address,
    skills: req.body.skills,
    isActive: req.body.isActive,
  });

  employee
    .save()
    .then(() => {
      console.log('Employee saved successfully');
      return res.status(201).json({
        message: 'Employee added successfully',
      });
    })
    .catch((error) => {
      console.error('Error saving employee:', error);
      return res.status(500).json({
        message: 'Failed to add employee',
        error: error.message,
      });
    });
};

// Get All Employees
const getEmployees = (req, res, next) => {
  Employee.find()
    .then((documents) => {
      res.status(200).json(documents);
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Failed to fetch employees',
        error: error.message,
      });
    });
};

// Get Employee by ID
const getEmployeeById = (req, res, next) => {
  const employeeId = req.params.id; 
  console.log('Searching for employee with ID:', employeeId); 

  Employee.findOne({ employeeId: employeeId })
    .then((employee) => {
      if (!employee) {
        return res.status(404).json({
          message: 'Employee not found',
        });
      }
      return res.status(200).json({
        message: 'Employee fetched successfully',
        employee: employee,
      });
    })
    .catch((error) => {
      console.error('Error fetching employee:', error);
      return res.status(500).json({
        message: 'Failed to fetch employee',
        error: error.message,
      });
    });
};

// Update Employee
const updateEmployee = (req, res, next) => {
  const employeeId = req.params.id;  
  const updatedEmployeeData = req.body;

  Employee.findOneAndUpdate({ employeeId: employeeId }, updatedEmployeeData, { new: true })
    .then((updatedEmployee) => {
      if (!updatedEmployee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
      res.status(200).json({
        message: 'Employee updated successfully',
        employee: updatedEmployee,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Failed to update employee',
        error: error.message,
      });
    });
};

// Delete Employee
const deleteEmployee = (req, res, next) => {
  const employeeId = req.params.id; 

  Employee.findOneAndDelete({ employeeId: employeeId })
    .then((result) => {
      if (!result) {
        return res.status(404).json({ message: 'Employee not found' });
      }
      res.status(200).json({ message: 'Employee deleted successfully' });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Failed to delete employee',
        error: error.message,
      });
    });
};

module.exports = { addEmployee, getEmployees, updateEmployee, deleteEmployee, getEmployeeById };
