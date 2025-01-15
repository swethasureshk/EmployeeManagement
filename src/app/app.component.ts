import { Component, Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeService } from './Service/employee.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EmployeeManagement';
  id:any;

  constructor(private employeeService:EmployeeService){}
  ngOnInit() { 
//     console.log(this.employeeService);
//     this.employeeService.getEmployeeList().subscribe((data) => {
//       console.log(data);
//     });

//     this.employeeService.getEmployeeById("EMP001").subscribe((data) => {
//       console.log(data);
//     });

//     this.employeeService.addEmployee({
//       employeeId: 'EMP0048',
//       firstName: 'Jane',
//       lastName: 'Doe',
//       email: 'jane.doe@example.com',
//       phone: '987-654-3210',
//       department: 'HR',
//       designation: 'HR Manager',
//       dateOfJoining: {
//           $date: '2023-01-15',
//       },
//       salary: 85000,
//       address: {
//           street: '456 Elm Street',
//           city: 'Springfield',
//           state: 'IL',
//           zip: '62704',
//       },
//       skills: ['Conflict Resolution', 'Recruitment', 'Employee Engagement'],
//       isActive: true,  
//   });

//  this.employeeService.updateEmployee({"firstName":'Jane'}, "EMP003").subscribe((data) => {
//     console.log(data); 
//   });

//   this.employeeService.deleteEmployee("EMP001").subscribe((data) => {
//     console.log(data);
//   });

}
}