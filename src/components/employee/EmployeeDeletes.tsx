"use client";
import {useEmpContext} from "@/context/empContext";


export const EmployeeDeletes = () => {

    const { getSelectedEmployee } = useEmpContext();
    const selectedEmployee = getSelectedEmployee();
    if (!selectedEmployee) return null;

    return (
        <div className={"w-full h-full p-1"}>
            <div className={"border w-full h-full"}>

            </div>
        </div>
    );
};

