export interface Employee {
    EmployeeId: number;
    First_Name: string;
    Last_Name: string;
    Department: string;
    Job_Title: string;
    Email: string;
    Total_Leave_Days: number;
    isManager: boolean;
    isApproved: boolean;
    isReplacement: boolean;
    Manager: string;
}