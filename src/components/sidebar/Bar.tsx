"use client";

import {UserCard} from "@/components/ui/User";
import {Emp} from "@/components/skeletons/Emp";
import {RootUser} from "@/components/sidebar/RootUser";
import {useEmpContext} from "@/context/empContext";
import {SidebarButton} from "@/components/ui/SidebarButton";
import {IconSettings, IconUserScan} from "@tabler/icons-react";
import {DropDown} from "@/components/sidebar/DropDown";
import BackButton from "@/components/ui/BackButton";

export default function Bar(){

    const { emp, loading } = useEmpContext();
    return (
        <div className={"w-[340px] h-screen overflow-y-scroll scrollbar-hide p-2 transition-width duration-200 ease-in-out"}>
            <div className={"w-full h-full rounded-2xl border border-gray-600"}>
                <div className={"w-full h-fit py-3 px-2 flex items-center justify-between border-b border-gray-600"}>
                    <div className={"ml-2 flex items-center"}>
                        {loading ? <Emp/> : <UserCard role={emp?.role || "Emply"} name={emp?.name || "Emply"} description={emp?.description || "Emply"}/>}
                    </div>
                    <BackButton/>
                </div>
                <RootUser/>
                <div className={"px-3"}>
                    <div className={"w-full h-full border-b border-gray-600 font-semibold pb-1"}>
                        <DropDown
                            selectionMode={"single"}
                            itemList={[
                                {
                                    key: "user scan",
                                    title: {label: "User", Icon: IconUserScan},
                                    ariaLabel: "user scan",
                                    children: (
                                        <div className={"flex flex-col gap-2"}>
                                            <SidebarButton Icon={IconUserScan} label={"profile"} link={"/profile"}/>
                                            <SidebarButton Icon={IconSettings} label={"Setting"} link={"/setting"}/>
                                        </div>
                                    )
                                },
                            ]}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};
