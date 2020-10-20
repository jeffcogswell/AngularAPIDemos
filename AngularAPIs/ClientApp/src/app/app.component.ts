import { Component } from '@angular/core';
import { DataAccessService } from './data-access.service';
import { Employee } from './interfaces/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  constructor(private dal: DataAccessService) { }
  
  clickGetAll() {
    this.dal.getEmployees().subscribe(
      (data) => {
        console.log('All employees');
        console.log(data);
      }
    );
  }

  clickGetOne() {
    this.dal.getEmployee(5).subscribe(
      (data) => {
        console.log('All employees');
        console.log(data);
      }
    );
  }

  clickCreateOne() {
    // We don't provide an ID. We let the database do that.
    let emp = {
      FirstName: 'Thomas',
      LastName: 'Jefferson',
      Department: 'Management',
      Salary: 100000
    };

    this.dal.createEmployee(emp).subscribe(
      (data) => {
        // When we get the object back, ID will be filled in
        console.log('All employees');
        console.log(data);
      }
    );
  }

  clickUpdateOne() {
    // We're starting with an existing one, in this case ID 5,
    // And changing some of its members, in this case Salary.
    let emp = {
      id: 5,
      FirstName: 'Ringo',
      LastName: 'Starr',
      Department: 'Music',
      Salary: 50000
    };

    this.dal.updateEmployee(emp).subscribe(
      (data) => {
        console.log('All employees');
        console.log(data);
      }
    );
  }




}
