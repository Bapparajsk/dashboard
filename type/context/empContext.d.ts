import {EmployeeCardProps} from "&/components/employee/EmployeeCard";
import {Key} from "react";

export interface EmployeeType {
    name: string;
    age: number;
    role: "admin" | "employee";
    description: string;
}

export interface EmpContextType {
    emp: EmployeeType | null;
    loading: boolean
    fetchEmployees: ({page}: { page?: number }) => Promise<{ employees: EmployeeCardProps[]; nextPage: number | null }>;
    selectedEmployeeId: number;
    selectEmployeeId: (id: number) => void;
    selectedEmployee: EmployeeCardProps | null;
    employeeTab: string;
    selectEmployeeTab: (id: Key) => void;
}
