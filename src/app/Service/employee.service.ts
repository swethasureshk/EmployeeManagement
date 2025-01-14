import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../../employee.model';


@Injectable({
  providedIn: 'root'
})


export class EmployeeService {

  constructor(private http:HttpClient) { }

  getEmployeeList(){
    console.log(this.http);
    return this.http.get<Employee[]>('http://localhost:3000/api/employees');
  }
}
