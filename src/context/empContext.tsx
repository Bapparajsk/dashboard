"use client";

import {createContext, useContext, useState, useEffect, ReactNode, Key} from "react";
import {EmpContextType, EmployeeType} from "&/context/empContext";
import {getEmp} from "@/lib/emp";
import {EmployeeCardProps} from "&/components/employee/EmployeeCard";
import {useQueryState, parseAsInteger} from "nuqs";

const EmpContext = createContext<EmpContextType | undefined>(undefined);

const refList = ["Bappa", "Sohely", "Mou", "Rana", "Masud"];
export let employees: EmployeeCardProps[] = [
    { id: 1, name: "Alice Johnson", description: "Senior Developer", role: "Engineer", isOnline: true, isNew: false },
    { id: 2, name: "Bob Smith", description: "Product Manager", role: "Manager", isOnline: false, lastOnline: new Date("2025-03-31T12:00:00Z"), isNew: false },
    { id: 3, name: "Charlie Brown", description: "UI/UX Designer", role: "Designer", isOnline: true, isNew: true },
    { id: 4, name: "Diana Prince", description: "Software Architect", role: "Engineer", isOnline: false, lastOnline: new Date("2025-03-31T15:50:00Z"), isNew: false },
    { id: 5, name: "Evan Wright", description: "Frontend Developer", role: "Engineer", isOnline: true, isNew: false },
    { id: 6, name: "Fiona White", description: "Backend Developer", role: "Engineer", isOnline: false, lastOnline: new Date("2025-03-28T10:15:00Z"), isNew: true },
    { id: 7, name: "George King", description: "QA Analyst", role: "QA", isOnline: true, isNew: false },
    { id: 8, name: "Hannah Lee", description: "HR Manager", role: "HR", isOnline: false, lastOnline: new Date("2025-03-27T09:45:00Z"), isNew: false },
    { id: 9, name: "Ian Scott", description: "DevOps Engineer", role: "Engineer", isOnline: true, isNew: true },
    { id: 10, name: "Jane Doe", description: "Marketing Specialist", role: "Marketing", isOnline: false, lastOnline: new Date("2025-03-26T14:20:00Z"), isNew: false },
    { id: 11, name: "Kevin Hart", description: "Data Scientist", role: "Engineer", isOnline: true, isNew: false },
    { id: 12, name: "Laura Kim", description: "Customer Support", role: "Support", isOnline: false, lastOnline: new Date("2025-03-25T11:10:00Z"), isNew: true },
    { id: 13, name: "Michael Clark", description: "Project Manager", role: "Manager", isOnline: true, isNew: false },
    { id: 14, name: "Nina Patel", description: "Software Engineer", role: "Engineer", isOnline: false, lastOnline: new Date("2025-03-24T13:50:00Z"), isNew: true },
    { id: 15, name: "Oliver Queen", description: "Full Stack Developer", role: "Engineer", isOnline: true, isNew: false },
    { id: 16, name: "Paul Walker", description: "Security Analyst", role: "Security", isOnline: false, lastOnline: new Date("2025-03-23T10:30:00Z"), isNew: false },
    { id: 17, name: "Rachel Green", description: "Business Analyst", role: "Analyst", isOnline: true, isNew: false },
    { id: 18, name: "Steve Rogers", description: "Cloud Engineer", role: "Engineer", isOnline: false, lastOnline: new Date("2025-03-22T08:45:00Z"), isNew: true },
    { id: 19, name: "Tony Stark", description: "CTO", role: "Executive", isOnline: true, isNew: false },
    { id: 20, name: "Uma Thurman", description: "Legal Advisor", role: "Legal", isOnline: false, lastOnline: new Date("2025-03-21T14:00:00Z"), isNew: true },
    { id: 21, name: "Victor Stone", description: "Machine Learning Engineer", role: "AI", isOnline: true, isNew: false },
    { id: 22, name: "Wanda Maximoff", description: "Data Analyst", role: "Analyst", isOnline: false, lastOnline: new Date("2025-03-20T12:15:00Z"), isNew: false },
    { id: 23, name: "Xander Cage", description: "Cybersecurity Expert", role: "Security", isOnline: true, isNew: true },
    { id: 24, name: "Yvonne Strahovski", description: "PR Manager", role: "Marketing", isOnline: false, lastOnline: new Date("2025-03-19T16:50:00Z"), isNew: false },
    { id: 25, name: "Zack Snyder", description: "Creative Director", role: "Design", isOnline: true, isNew: false },
];

const add = () => {
    return employees.map((employee) => {
        const refUser = refList[Math.floor(Math.random() * refList.length)];
        const starEmployee = Math.random() < 0.5;
        return {...employee, refUser, starEmployee};
    });
};

employees = add();

export const EmpProvider = ({children} : {children: ReactNode}) => {

    const [user, setUser] = useState<EmployeeType | null>(null);
    const [selectedEmployee, setSelectedEmployee] = useState<EmployeeCardProps | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedEmployeeId, setSelectedEmployeeId] = useQueryState("selected-employee-id", parseAsInteger.withDefault(0));
    const [employeeTab, setEmployeeTab] = useQueryState("employee-tab", {defaultValue: ""});


    const fetchUser = async () => {
        const user = await getEmp();
        setUser(user);
        setLoading(false);
    };

    const selectEmployeeTab = (id: Key) => {
        if(typeof id !== "string") return;
        setEmployeeTab(id).catch(console.log);
    };

    const selectEmployeeId = (id: number) => {
        setSelectedEmployeeId(id).catch(console.log);
    };

    const getSelectedEmployee = () => {
        return employees.find((employee) => employee.id === selectedEmployeeId);
    };

    const fetchEmployees = async ({page = 1} : {page?: number}):Promise<{ employees: EmployeeCardProps[]; nextPage: number | null }> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const employee = employees.slice((page - 1) * 5, page * 5);
                const hashNext = page * 5 < employees.length ? page + 1 : null;
                resolve({
                    employees: employee,
                    nextPage: hashNext
                });
            }, 1000);
        });
    };

    useEffect(() => {
        fetchUser();
    }, []);

    useEffect(() => {
        if (selectedEmployeeId) {
            const employee = getSelectedEmployee();
            setSelectedEmployee(employee || null);
        }
    }, [selectedEmployeeId]);

    return (
        <EmpContext value={{
            emp: user,
            loading,
            fetchEmployees,
            selectedEmployeeId,
            selectEmployeeId,
            selectedEmployee,
            employeeTab,
            selectEmployeeTab
        }}>
            {children}
        </EmpContext>
    );
};

export const useEmpContext = () => {
    const context = useContext(EmpContext);
    if (!context) {
        throw new Error("useEmpContext must be used within a EmpProvider");
    }

    return context;
};
