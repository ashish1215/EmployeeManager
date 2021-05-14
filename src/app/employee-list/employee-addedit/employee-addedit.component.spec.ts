import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddeditComponent } from './employee-addedit.component';

describe('EmployeeAddeditComponent', () => {
  let component: EmployeeAddeditComponent;
  let fixture: ComponentFixture<EmployeeAddeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAddeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAddeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
