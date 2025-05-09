"use client";

import {
    IconBellShare,
    IconCreditCard,
    IconListTree,
    IconMail,
    IconMessageReport,
    IconUsers,
    IconUserScan,
    IconUsersGroup
} from "@tabler/icons-react";
import {Filter} from "@/components/ui/Filter";
import React, {Key} from "react";
import {useUserList} from "@/context/userListContext";
import {CardTab} from "@/components/ui/CardTab";
import {TabDataType, UserListProps} from "&/components/user/userList";
import {useEmpContext} from "@/context/empContext";
import {FilterProps} from "&/components/ui/Filter";

const UserstabData: TabDataType[] = [
    {
        Icon: IconUserScan,
        title: "Profile",
        key: "profile"
    },
    {
        Icon: IconUsersGroup,
        title: "Friends",
        key: "friends"
    },
    {
        Icon: IconCreditCard,
        title: "Posts",
        key: "posts"
    },
    {
        Icon: IconMessageReport,
        title: "Reports",
        key: "reports"
    },
    {
        Icon: IconBellShare,
        title: "Notification",
        key: "send-notification"
    }
];

const employeeTabData: TabDataType[] = [
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
        Icon: IconBellShare,
        title: "Notification",
        key: "send-notification"
    }
];

export const UserListNav = ({ isEmployee }: UserListProps) => {

    const { setListTabKeyName, listTabKey, selectedUserId, userTab, setUserTabName } = useUserList();
    const { fetchEmployees, selectedEmployeeId, selectEmployeeId, selectedEmployee, employeeTab, selectEmployeeTab } = useEmpContext();

    const tabProps: FilterProps["TabsProps"] = isEmployee ? {
        defaultSelectedKey: "all",
        onSelectionChange: (key: Key) => {
            console.log(key);
        },
        tabs: [
            { key: "all", title: "All", Icon: () => <div/> },
            { key: "online", title: "Online", Icon: () => <div/> },
        ]
    } : {
        defaultSelectedKey: listTabKey,
        onSelectionChange: setListTabKeyName,
        tabs: [
            { key: "user", title: "Users", Icon: IconUsers },
            { key: "email", title: "Email", Icon: IconMail },
        ]
    };

    return (
        <div className={"w-full h-full flex items-center border-b border-gray-600"}>
            <div className={"w-2/3"}>
                <Filter
                    showBorder={false}
                    InputProps={{ placeholder: "Search Users..." }}
                    TabsProps={tabProps}
                    createNewButton={{
                        icon: { size: 20 },
                        buttonProps: {
                            size: "sm",
                            onPress: () => {
                                console.log("Create new user");
                            }
                        }
                    }}
                />
            </div>
            <div className={"w-1/3 h-full border-l border-gray-600 py-2 font-semibold space-y-2"}>
                <div className={"w-full h-full flex items-center"}>
                    <CardTab
                        isDisabled={isEmployee ? !selectedEmployee : !selectedUserId}
                        defaultSelectedKey={isEmployee ? employeeTab : userTab}
                        onSelectionChange={isEmployee ? selectEmployeeTab : setUserTabName}
                        size={"sm"}
                        variant={"underlined"}
                        items={employeeTabData}
                        aria-label={"User Tabs"}
                    />
                </div>
            </div>
        </div>
    );
};
