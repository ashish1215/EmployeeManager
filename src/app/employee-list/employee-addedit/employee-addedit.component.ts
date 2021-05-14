import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-addedit',
  templateUrl: './employee-addedit.component.html',
  styleUrls: ['./employee-addedit.component.scss']
})
export class EmployeeAddeditComponent implements OnInit {

  employeeFormGroup: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    salary: new FormControl('')
  })
  editMode: boolean;
  data: any;

  constructor(private router: Router, private activateRouter: ActivatedRoute, private service: EmployeeService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.data = JSON.parse(this.activateRouter.snapshot.queryParamMap.get('employee'));

    if (this.data) {
      this.editMode = true;
      this.employeeFormGroup.patchValue(this.data);
    } else {
      this.editMode = false;
    }
  }

  onAdd() {
    this.service.addEmployee(this.employeeFormGroup.value).subscribe((response) => {
      if (response) {
        this.router.navigate(['/employees']);
        this._snackBar.open('Successfully Added Employee', null, { duration: 4 * 1000 });
      }
    })
  }

  onEdit() {
    this.service.updateEmployeeList(this.data.id, this.employeeFormGroup.value).subscribe((response) => {
      if (response) {
        this.router.navigate(['/employees']);
        this._snackBar.open('Successfully Updated Employee', null, { duration: 4 * 1000 });
      }
    })
  }

}
