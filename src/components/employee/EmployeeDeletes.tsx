"use client";

import {FC, createElement} from "react";
import {useEmpContext} from "@/context/empContext";
import {CardTab} from "@/components/ui/CardTab";
import {TabDataType} from "&/components/user/userList";
import {
    IconBellShare,
    IconKey,
    IconListTree,
    IconMailShare,
    IconUserScan
} from "@tabler/icons-react";
import {Profile} from "@/components/employee/EmplyeeCard/Profile";
import {Logs} from "@/components/employee/EmplyeeCard/Logs";

const tabData: TabDataType[] = [
    {
        Icon: IconUserScan,
        title: "Profile",
        key: "profile"
    },
    {
        Icon: IconListTree,
        title: "Logs",
        key: "logs"
    },
    {
        Icon: IconKey,
        title: "Permissions",
        key: "permissions"
    },
    {
        Icon: IconMailShare,
        title: "Email",
        key: "send-email"
    },
    {
        Icon: IconBellShare,
        title: "Notification",
        key: "send-notification"
    }
];

const tabComponents: Record<string, FC> = {
    profile: Profile,
    logs: Logs,
    permissions: () => <div>Permissions</div>,
    "send-email": () => <div>Email</div>,
    "send-notification": () => <div>Notification</div>
};

export const EmployeeDeletes = () => {

    const { selectedEmployee, employeeTab, selectEmployeeTab } = useEmpContext();

    return (
        <div className={"w-full h-full pt-1 flex flex-col"}>
            <div className={"w-full py-3 border-b border-gray-600"}>
                <CardTab
                    isDisabled={!selectedEmployee}
                    defaultSelectedKey={employeeTab}
                    onSelectionChange={selectEmployeeTab}
                    size={"sm"}
                    variant={"underlined"}
                    items={tabData}
                    aria-label={"Employee Tabs"}
                />
            </div>
            <div className={"w-full h-full p-2"}>
                <div className={"w-full h-full border overflow-hidden rounded-md border-gray-600"}>
                    <div className={"w-full h-full flex flex-col"}>
                        {selectedEmployee && (
                            <div className={"w-full h-full flex flex-col"}>
                                {createElement(tabComponents[employeeTab])}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

