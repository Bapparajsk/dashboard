export interface EmployeeType {
    name: string;
    age: number;
    role: "admin" | "employee";
    description: string;
}

export interface EmpContextType {
    emp: EmployeeType | null;
    loading: boolean
}
