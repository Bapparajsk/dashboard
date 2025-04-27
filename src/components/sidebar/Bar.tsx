"use client";

import {UserCard} from "@/components/ui/User";
import {Emp} from "@/components/skeletons/Emp";
import {RootUser} from "@/components/sidebar/RootUser";
import {useEmpContext} from "@/context/empContext";
import {SidebarButton} from "@/components/ui/SidebarButton";
import {IconBell, IconLogout, IconMail, IconSettings, IconUserScan} from "@tabler/icons-react";
import BackButton from "@/components/ui/BackButton";
import {ButtonDataType} from "&/components/sidebar/bar";

const buttonData: ButtonDataType[] = [
    {
        Icon: IconUserScan,
        label: "Profile",
        link: "/profile",
    },
    {
        Icon: IconMail,
        label: "Emails",
        onClick: () => {
            console.log("Emails");
        }
    },
    {
        Icon: IconBell,
        label: "Notifications",
        onClick: () => {
            console.log("Notifications");
        }
    },
    {
        Icon: IconSettings,
        label: "Setting",
        link: "/setting",
    },
    {
        Icon: IconLogout,
        label: "Logout",
        isDanger: true,
    }
];

export default function Bar(){

    const { emp, loading } = useEmpContext();
    return (
        <div className={"w-[340px] h-screen overflow-y-scroll scrollbar-hide p-2 transition-width duration-200 ease-in-out"}>
            <div className={"w-full h-full rounded-md border border-gray-600"}>
                <div className={"w-full h-fit py-3 px-2 flex items-center justify-between border-b border-gray-600"}>
                    <div className={"ml-2 flex items-center"}>
                        {loading ? <Emp/> : <UserCard role={emp?.role || "Emply"} name={emp?.name || "Emply"} description={emp?.description || "Emply"}/>}
                    </div>
                    <BackButton/>
                </div>
                <RootUser/>
                <div className={"px-3"}>
                    <div className={"w-full h-full font-semibold pb-1"}>
                        <GetButtons/>
                    </div>
                </div>
            </div>
        </div>
    );
};

function GetButtons() {
    return (
        <div className={"flex flex-col gap-2"}>
            {buttonData.map(item => (
                <SidebarButton
                    key={item.label}
                    Icon={item.Icon}
                    label={item.label}
                    link={item.link}
                    onClick={item.onClick}
                    isDanger={item.isDanger}
                />
            ))}
        </div>
    );
}
