const express = require('express');
const { addEmployee, getEmployees, updateEmployee, deleteEmployee, getEmployeeById } = require('../controllers/employeeController');
const router = express.Router();

router.post('/', addEmployee);
router.get('/', getEmployees);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);
router.get('/:id', getEmployeeById);  // Route to fetch employee by ID

module.exports = router;
