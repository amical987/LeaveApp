import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../Employee.model';
import { EmployeeleaveService } from '../employeeleave.service';
import { Leave } from '../leave.model';
import { LEAVES } from '../mock-leaves';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit {

  leaves:Leave[] = LEAVES;
  employees:Employee[] = [];
  Total_Days_Applied: number;
  endDate: number = this.leaves[0].End_Date.getTime();
  startDate: number = this.leaves[0].Start_Date.getTime();
  value = '';
 
  constructor(private service: EmployeeleaveService) { }

  ngOnInit(): void {
    this.employees = this.service.employees;
    this.Total_Days_Applied = Math.round((this.endDate - this.startDate)/86400000);
  }

  onRemainingAnnualLeave(TotalDays: number)
  {
    debugger;
      this.employees[0].Total_Leave_Days -= this.Total_Days_Applied;
      return this.employees[0].Total_Leave_Days;
  }

  /**onSelectedSpecialLeave(Special_Leave){
    if(Special_Leave === "Birth of Child")
    {
        this.Special_Days = 5;
    }
    if(Special_Leave === "Marriage")
    {
        this.Special_Days = 1;
    }
    if(Special_Leave === "Relocation")
    {
        this.Special_Days = 3;
    }
    return this.Special_Days;
  }

  onSelectedSickLeave()
  {
    if(this.Leave_Type === "Sick Leave")
    {
        this.Sick_Days = this.Selected_No_Days;     
    }
  }

  save()
  {
    console.log("Nas api je reg.", this.employee);
  }**/

}
