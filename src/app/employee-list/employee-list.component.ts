import { OnDestroy, OnInit, Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EmployeeData } from './employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'salary', 'actions'];
  dataSource: MatTableDataSource<EmployeeData>;

  @ViewChild('paginator') paginator: any;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router, private service: EmployeeService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.service.getEmployeeList().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
    })
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onAddEmployee() {
    this.router.navigate(['employee-add']);
  }

  onEdit(employee) {
    this.router.navigate(['employee-add'], { queryParams: { employee: JSON.stringify(employee) } })
  }

  onDelete(id) {
    this.service.deleteEmployee(id).subscribe((response) => {
      if (response) {
        this.dataSource = new MatTableDataSource(response);
        this._snackBar.open('Deleted Successfully', null, { duration: 4 * 1000 });
      }
    })
  }

}
