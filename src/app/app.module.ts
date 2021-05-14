import { NgModule } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSort } from '@angular/material/sort';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelect, MatSelectModule, MatSnackBarModule, MatTooltipModule } from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EmployeeAddeditComponent } from './employee-list/employee-addedit/employee-addedit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    MatPaginator,
    EmployeeAddeditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
