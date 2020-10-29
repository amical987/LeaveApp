import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { Employee } from '../Employee.model';
import { EmployeeleaveService } from '../employeeleave.service';
import { MessageService } from '../message.service';
import { EMPLOYEES } from '../mock-employees';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  employees:Employee[] = EMPLOYEES;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };
  
  constructor(private employeeleaveService: EmployeeleaveService) { }

  ngOnInit(): void {
  }

}
