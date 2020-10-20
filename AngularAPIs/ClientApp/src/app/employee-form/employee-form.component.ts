import { Component } from '@angular/core';
import { Employee } from '../interfaces/employee';
import { DataAccessService } from '../data-access.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})

// IMPORTANT! If using the Visual Studio angular templates, you have to manually
// add two lines to the app.module.ts file. Search that file for "EmployeeForm"
// to see the lines I had to add.
export class EmployeeFormComponent {

  // This will map to the form. Note that we're using "template forms",
  // not "responsive forms"(google it to learn more)

  emp: Employee = {
    id: null,
    firstName: '',
    lastName: '',
    department: '',
    salary: 0
  };

  constructor(private dal: DataAccessService) { }

  loadRecord(id) {
    this.dal.getEmployee(id).subscribe(
      (data: Employee) => {
        console.log('Results of Get ID #5');
        console.log(data);
        this.emp = { ...data };
      }
    );

  }

  doCreate() {
    console.log('Creating...');
    console.log(this.emp);
    this.dal.createEmployee(this.emp).subscribe(
      (data) => {
        console.log(data);
        this.emp = { ...data };
      }
    );
  }

  doUpdate() {
    console.log('Updating...');
    console.log(this.emp);
    this.dal.updateEmployee(this.emp).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }


}
