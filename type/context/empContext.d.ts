import {EmployeeCardProps} from "&/components/employee/EmployeeCard";

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
}
