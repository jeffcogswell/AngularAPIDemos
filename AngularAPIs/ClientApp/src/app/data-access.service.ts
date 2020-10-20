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

  // This is for creating, but we use the same API call as updating
  createEmployee(emp) {
    return this.http.post<Employee>(this.apiUrl, emp);
  }

  // This is for updating, but we use the same API call as creating
  // These could be one function, maybe call it Save.
  updateEmployee(emp) {
    return this.http.post<Employee>(this.apiUrl, emp);
  }

}
