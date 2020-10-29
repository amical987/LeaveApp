import { Employee } from './Employee.model';

export const EMPLOYEES: Employee[] = [
    {
        EmployeeId: 11310,
        First_Name: "Amil",
        Last_Name: "Calija",
        Department: "Engineering",
        Job_Title: "Engineer",
        Email: "amilcalija@infinity.com",
        Total_Leave_Days: 25,
        isManager: false,
        isApproved: true,
        isReplacement: false,
        Manager: "Avdo Hercegovac"
    },
    {
        EmployeeId: 11311,
        First_Name: "Avdo",
        Last_Name: "Hercegovac",
        Department: "Engineering",
        Job_Title: "Direktor",
        Email: "avdohercegovac@infinity.com",
        Total_Leave_Days: 25,
        isManager: true,
        isApproved: true,
        isReplacement: false,
        Manager: "N/A"
    }
];