"use client";

import {RenderUser} from "@/components/user/RenderUser";
import {Tab, Tabs} from "@heroui/react";
import {useUserTab} from "@/hooks/List";
import {IconBellShare, IconMailDown, IconMailShare, IconUserScan} from "@tabler/icons-react";
import {RenderUserList} from "@/components/user/RenderUserList";
import {useUserList} from "@/context/userListContext";

const tabData = [
    {
        Icon: IconUserScan,
        title: "Profile",
        key: "profile"
    },
    {
        Icon: IconMailDown,
        title: "Emails",
        key: "emails"
    },
    {
        Icon: IconMailShare,
        title: "Send Email",
        key: "sendEmail"
    },
    {
        Icon: IconBellShare,
        title: "Send Notification",
        key: "sendNotification"
    }
];


export const UserList = () => {
    const { userTab, setUserTabName } = useUserTab();
    const { selectedUserId } = useUserList();



    return (
        <div className={"w-full flex"} style={{ height: "calc(100vh - 14.8rem)" }}>
            <div className={"w-2/3 h-full"}>

                <RenderUserList/>
            </div>
            <div className={"w-1/3 h-full border-l border-gray-600 py-2 flex flex-col gap-2 font-semibold"}>
                <div className={"w-full py-2 border-b border-gray-600"}>
                    <Tabs defaultSelectedKey={userTab} isDisabled={!selectedUserId} onSelectionChange={k => setUserTabName(k as string)} size={"sm"} variant={"underlined"}>
                        {tabData.map((tab) => (
                            <Tab key={tab.key} title={
                                <div className={"flex gap-2 items-center"}>
                                    <tab.Icon size={20}/>
                                    <span>{tab.title}</span>
                                </div>
                            }/>
                        ))}
                    </Tabs>
                </div>
                <div className={"w-full h-full px-3"}>
                    <div className={"w-full h-full border border-gray-600 rounded-xl overflow-hidden"}>
                        <RenderUser />
                    </div>
                </div>
            </div>
        </div>
    );
};
