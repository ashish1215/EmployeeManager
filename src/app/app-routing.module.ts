import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeAddeditComponent } from './employee-list/employee-addedit/employee-addedit.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [{ path: 'employees', component: EmployeeListComponent },
{ path: 'employee-add', component: EmployeeAddeditComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
