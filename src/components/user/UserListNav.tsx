import {IconBellShare, IconCreditCard, IconMail, IconMessageReport, IconUsers, IconUserScan} from "@tabler/icons-react";
import {Filter} from "@/components/ui/Filter";
import React from "react";
import {useUserList} from "@/context/userListContext";
import {CardTab} from "@/components/ui/CardTab";
import {TabDataType} from "&/components/user/userList";

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

export const UserListNav = () => {

    const { setListTabKeyName, listTabKey, selectedUserId, userTab, setUserTabName } = useUserList();

    return (
        <div className={"w-full h-full flex border-b border-gray-600"}>
            <div className={"w-2/3"}>
                <Filter
                    showBorder={false}
                    InputProps={{ placeholder: "Search Users..." }}
                    TabsProps={{
                        defaultSelectedKey: listTabKey,
                        onSelectionChange: setListTabKeyName,
                        size: "md",
                        tabs: [
                            { key: "user", title: "Users", Icon: IconUsers },
                            { key: "email", title: "Email", Icon: IconMail },
                        ]
                    }}
                    createNewButton={{
                        icon: { size: 20 },
                        buttonProps: {
                            size: "md",
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
                        isDisabled={!selectedUserId}
                        defaultSelectedKey={userTab}
                        onSelectionChange={setUserTabName}
                        size={"sm"}
                        variant={"underlined"}
                        items={tabData}
                        aria-label={"User Tabs"}
                    />
                </div>
            </div>
        </div>
    );
};
