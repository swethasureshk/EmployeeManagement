import { Component, Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeService } from './Service/employee.service';
import { of } from 'rxjs';

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
    console.log(this.employeeService);
    this.employeeService.getEmployeeList().subscribe((data) => {
      console.log(data);
      this.id=data[0].employeeId;
    });
  }
}
