const express= require('express');
const app = express();

app.use('/api/employees', (req, res, next) => {
  const employees = [
    {
        "_id": {
          "$oid": "6784e397ba400abaf0cb241b"
        },
        "employeeId": "EMP001",
        "firstName": "FirstName1",
        "lastName": "LastName1",
        "email": "firstname1.lastname1@example.com",
        "phone": "359-470-5534",
        "department": "Operations",
        "designation": "Backend Developer",
        "dateOfJoining": {
          "$date": "2021-10-15T00:00:00.000Z"
        },
        "salary": 85022.11,
        "address": {
          "street": "531 Cedar Drive",
          "city": "Evergreen",
          "state": "WA",
          "zip": "98804"
        },
        "skills": [
          "Google Analytics",
          "React",
          "DevOps",
          "Accounting",
          "PHP"
        ],
        "isActive": false
      }
    ];
});


module.exports = app;