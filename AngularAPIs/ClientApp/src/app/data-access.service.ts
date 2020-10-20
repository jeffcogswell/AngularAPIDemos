import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  constructor(private http:HttpClient) { }

  apiUrl = '/api/employees';

  getEmployees() {
    return this.http.get(this.apiUrl);
  }

  getEmployee(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // TODO: I'll find out why the C# end isn't automatically converting
  createEmployee(emp: Employee) {
    emp.id = 0;
    emp.salary = Number(emp.salary);
    return this.http.post<Employee>(this.apiUrl + '/create', emp);
  }

  updateEmployee(emp: Employee) {
    emp.id = Number(emp.id);
    emp.salary = Number(emp.salary);
    return this.http.post<Employee>(this.apiUrl + '/update', emp);
  }

}
