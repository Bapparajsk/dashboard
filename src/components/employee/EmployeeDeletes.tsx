"use client";

import {FC, createElement} from "react";
import {useEmpContext} from "@/context/empContext";
import {Profile} from "@/components/employee/EmplyeeCard/Profile";
import {Logs} from "@/components/employee/EmplyeeCard/Logs";
import {Notifications} from "@/components/ui/Notifications";

const tabComponents: Record<string, FC> = {
    profile: Profile,
    logs: Logs,
    "send-notification": () => <Notifications/>
};

export const EmployeeDeletes = () => {

    const { selectedEmployee, employeeTab } = useEmpContext();

    return (
        <div className={"w-full h-full overflow-hidden rounded-md border-gray-600"}>
            <div className={"w-full h-full flex flex-col"}>
                {selectedEmployee && employeeTab && (
                    <div className={"w-full h-full flex flex-col"}>
                        {createElement(tabComponents[employeeTab])}
                    </div>
                )}
            </div>
        </div>
    );
};

