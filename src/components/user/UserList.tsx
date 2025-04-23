"use client";

import {RenderUser} from "@/components/user/RenderUser";
import {
    IconBellShare,
    IconCreditCard,
    IconMailShare,
    IconMessageReport,
    IconUserScan
} from "@tabler/icons-react";
import {RenderUserList} from "@/components/user/RenderUserList";
import {useUserList} from "@/context/userListContext";
import {CardTab} from "@/components/ui/CardTab";
import {TabDataType} from "&/components/user/userList";
import {Button} from "@heroui/button";

const tabData: TabDataType[] = [
    {
        Icon: IconUserScan,
        title: "Profile",
        key: "profile"
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

export const UserList = () => {

    const { selectedUserId, userTab, setUserTabName } = useUserList();

    return (
        <div className={"w-full flex"} style={{ height: "calc(100vh - 14.8rem)" }}>
            <div className={"w-2/3 h-full"}>
                <RenderUserList/>
            </div>
            <div className={"w-1/3 h-full border-l border-gray-600 py-2 flex flex-col gap-2 font-semibold"}>
                <div className={"w-full py-2 border-b border-gray-600"}>
                    <CardTab
                        isDisabled={!selectedUserId}
                        defaultSelectedKey={userTab}
                        onSelectionChange={setUserTabName}
                        size={"sm"}
                        variant={"underlined"}
                        items={tabData}
                        aria-label={"User Tabs"}
                    />
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
