"use client";
import {UserCard} from "@/components/user/UserCard";
import {RenderUser} from "@/components/user/RenderUser";
import {Filter} from "@/components/user/Filter";
import {Tab, Tabs} from "@heroui/react";
import {useSelectedUser, useUserTab} from "@/hooks/List";
import {useUser} from "@/hooks/useUser";
import {IconBellShare, IconMail, IconMailShare, IconUserScan} from "@tabler/icons-react";
import {UserCardSkeleton} from "@/components/skeletons/UserCard";
import {MouseEvent} from "react";

const tabData = [
    {
        Icon: IconUserScan,
        title: "Profile",
        key: "profile"
    },
    {
        Icon: IconMail,
        title: "Emails",
        key: "emails"
    },
    {
        Icon: IconMailShare,
        title: "Email",
        key: "sendEmail"
    },
    {
        Icon: IconBellShare,
        title: "Notifications",
        key: "sendNotifications"
    }
];


export const UserList = () => {
    const { userTab, setUserTabName } = useUserTab();
    const { users, loading } = useUser();
    const { setSelectedUserId, selectedUserId } = useSelectedUser();

    const userClickHandler = (e: MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        if (!target.classList.contains("user-card")) return;

        const idx = parseInt(target.accessKey);
        setSelectedUserId(idx.toString());
    };

    return (
        <div className={"w-full flex"} style={{ height: "calc(100vh - 14.8rem)" }}>
            <div className={"w-2/3 h-full"}>
                <div className={"relative w-full h-full overflow-y-scroll scrollbar-hide"} onClick={userClickHandler}>
                    <Filter/>
                    <div className={"px-3 pt-2"}>
                        {loading ? <UserCardSkeleton count={10}/> :
                            users.map((user, idx) => (
                                <UserCard key={idx} {...user}/>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={"w-1/3 h-full border-l border-gray-600 py-2 flex flex-col gap-2 font-semibold"}>
                <div className={"w-full py-2 border-b border-gray-600"}>
                    <Tabs defaultSelectedKey={userTab} isDisabled={!selectedUserId} onSelectionChange={setUserTabName} aria-label="user tabs" size={"sm"} variant={"underlined"}>
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
