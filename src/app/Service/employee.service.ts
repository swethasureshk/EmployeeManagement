import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../../employee.model';


@Injectable({
  providedIn: 'root'
})


export class EmployeeService {

  url:string = 'http://localhost:3000/api/employeeManagement';
  headers = { 'Content-Type': 'application/json' };

  constructor(private http:HttpClient) { }

  getEmployeeList(){
    console.log(this.http);
    return this.http.get<Employee[]>(this.url);
  }

  addEmployee(employee:Employee){
    return this.http.post(this.url, employee, {headers:this.headers});
  }

  getEmployeeById(id:string){
    return this.http.get<Employee>(this.url + '/' + id);
  }

  updateEmployee(employee:any, id:string){
    return this.http.put(this.url + '/' + id, employee, {headers:this.headers});
  }

  deleteEmployee(id:string){
    return this.http.delete(this.url + '/' + id);
  }

}
