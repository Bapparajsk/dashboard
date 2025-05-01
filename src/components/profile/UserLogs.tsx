"use client";

import {ProfileNav} from "@/components/profile/ProfileNav";
import {Divider} from "@heroui/divider";
import {LogLists} from "@/components/profile/LogLists";

export const UserLogs = () => {
    return (
        <div className={"w-full h-full px-5 flex flex-col"}>
            <div className={"w-full h-1/5 flex items-center justify-center"}>
                <div className={"w-full h-28"}>
                    <ProfileNav/>
                </div>
            </div>
            <Divider className={"my-1"}/>
            <div className={"w-full h-4/5 py-3"}>
                <LogLists/>
            </div>
        </div>
    );
};



