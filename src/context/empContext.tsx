"use client";

import { createContext, useContext, useState, useEffect } from "react";
import {EmpContextType, EmployeeType} from "&/context/empContext";
import {getEmp} from "@/lib/emp";

const EmpContext = createContext<EmpContextType>({
    emp: null,
    loading: true,
});

export const EmpProvider = ({children} : {children: React.ReactNode}) => {

    const [user, setUser] = useState<EmployeeType | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchUser = async () => {
        const user = await getEmp();
        setUser(user);
        setLoading(false);
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <EmpContext value={{
            emp: user,
            loading
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
