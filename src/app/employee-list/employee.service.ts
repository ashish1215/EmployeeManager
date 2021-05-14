import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() {
  }

  getEmployeeList(): Observable<any> {
    if (!localStorage.getItem('employees')) {
      localStorage.setItem('employees', JSON.stringify([]));
    }

    return of(JSON.parse(localStorage.getItem('employees')));
  }

  updateEmployeeList(id, employee): Observable<any> {
    let employeeList = JSON.parse(localStorage.getItem('employees'));

    employee['id'] = Math.round(Math.random() * 1000);

    let employeeByIdIndex = employeeList.findIndex((employee) => { employee.id === id })

    if (employeeByIdIndex) {
      employeeList.splice(employeeByIdIndex, 1);
      employeeList.push(employee);
      localStorage.setItem('employees', JSON.stringify(employeeList));
      return of(employeeList)
    } else {
      return of('employee not found')
    }
  }

  addEmployee(employee): Observable<any> {

    let employeeList = JSON.parse(localStorage.getItem('employees'));

    employee['id'] = Math.round(Math.random() * 1000);

    employeeList.push(employee);

    localStorage.setItem('employees', JSON.stringify(employeeList));

    return of(employeeList);

  }

  deleteEmployee(id): Observable<any> {
    let employeeList = JSON.parse(localStorage.getItem('employees'));

    let employeeByIdIndex = employeeList.findIndex((employee) => { employee.id === id })

    if (employeeByIdIndex) {
      employeeList.splice(employeeByIdIndex, 1);
      localStorage.setItem('employees', JSON.stringify(employeeList));
      return of(employeeList)
    } else {
      return of('employee not found')
    }
  }
}
