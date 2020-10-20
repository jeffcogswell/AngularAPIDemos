import { Component } from '@angular/core';
import { DataAccessService } from '../data-access.service';

@Component({
    selector: 'app-quick-tests',
    templateUrl: './quick-tests.component.html',
    styleUrls: ['./quick-tests.component.css']
})

export class QuickTestsComponent {

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
        console.log('Results of Get ID #5');
        console.log(data);
      }
    );
  }

  clickCreateOne() {
    // We don't provide an ID. We let the database do that.
    let emp = {
      id: null,
      firstName: 'Thomas',
      lastName: 'Jefferson',
      department: 'Management',
      salary: 100000
    };

    this.dal.createEmployee(emp).subscribe(
      (data) => {
        // When we get the object back, ID will be filled in
        console.log('Results of Create');
        console.log(data);
      }
    );
  }

  clickUpdateOne() {
    // We're starting with an existing one, in this case ID 5,
    // And changing some of its members, in this case Salary.
    let emp = {
      id: 5,
      firstName: 'Ringo',
      lastName: 'Starr',
      department: 'Music',
      salary: 50000
    };

    this.dal.updateEmployee(emp).subscribe(
      (data) => {
        console.log('Results of Update');
        console.log(data);
      }
    );
  }
}
