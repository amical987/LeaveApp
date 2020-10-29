import { Injectable } from '@angular/core';
import { Employee } from './Employee.model';
import { Leave } from './leave.model';
import { EMPLOYEES } from './mock-employees';
import { LEAVES } from './mock-leaves';

@Injectable({
  providedIn: 'root'
})
export class EmployeeleaveService {

  employees: Employee[] = EMPLOYEES;
  leaves: Leave[] = LEAVES;

  constructor() { }

}
