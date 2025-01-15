import { Component } from '@angular/core';
import { Employee } from '../../employee.model';
import { EmployeeService } from '../Service/employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule, MatTableModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  displayedColumns: string[] = [
    'employeeId',
    'firstName',
    'lastName',
    'email',
    'phone',
    'department',
    'designation',
    'dateOfJoining',
    'salary',
    'address',
    'skills',
    'isActive'
  ];
  employees: Employee[] = [];
  showEditModal: boolean = false;
  showDeleteModal: boolean = false;
  showViewModal: boolean = false;
  selectedEmployeeId: string | null = null;
  selectedEmployee: Employee = {
    employeeId: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    department: '',
    designation: '',
    dateOfJoining: { $date: '' },
    salary: 0,
    address: {
      street: '',
      city: '',
      state: '',
      zip: '',
    },
    skills: [],
    isActive: false,
  };
  
  

  constructor(private service: EmployeeService) {}

  ngOnInit() {
    this.service.getEmployeeList().subscribe((data: Employee[]) => {
      console.log(data);
      this.employees = data;
    });
  }

  confirmView(employee: Employee) {
    this.selectedEmployee = employee;
    this.showViewModal = true;
  }

  confirmEdit(employee: Employee) {
    this.selectedEmployee = { ...employee };
    this.showEditModal = true;
  }
  
  confirmDelete(employeeId: string) {
    this.selectedEmployeeId = employeeId;
    this.showDeleteModal = true;
  }

  closeViewModal() {
    this.showViewModal = false;
  }

  closeEditModal() {
    this.showEditModal = false;
  }

  closeDeleteModal() {
    this.showDeleteModal = false;
  }

  saveChanges() {
    if (this.selectedEmployee) {
      console.log('Saving changes for employee: ', this.selectedEmployee);
      const index = this.employees.findIndex(emp => emp.employeeId === this.selectedEmployee.employeeId);
      if (index !== -1) {
        this.employees[index] = { ...this.selectedEmployee };
      }
      this.service.updateEmployee(this.selectedEmployee, this.selectedEmployee.employeeId).subscribe((data) => {
        console.log('Employee updated successfully: ', data);
      }
      );
      this.closeEditModal();
    }
  }
  
  deleteEmployee() {
    if (this.selectedEmployeeId) {
      console.log(`Deleting employee with ID: ${this.selectedEmployeeId}`);
      this.service.deleteEmployee(this.selectedEmployeeId).subscribe((data) => {
        console.log('Employee deleted successfully: ', data);
      }
    );
      this.employees = this.employees.filter(emp => emp.employeeId !== this.selectedEmployeeId);
    }
    this.closeDeleteModal();
  }
}
