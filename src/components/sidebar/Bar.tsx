"use client";

import {UserCard} from "@/components/ui/User";
import {Emp} from "@/components/skeletons/Emp";
import {RootUser} from "@/components/sidebar/RootUser";
import {useEmpContext} from "@/context/empContext";

export default function Bar(){

    const { emp, loading } = useEmpContext();

    return (
        <div className={"w-[340px] h-screen overflow-y-scroll scrollbar-hide p-2 transition-width duration-200 ease-in-out"}>
            <div className={"w-full h-full rounded-2xl border border-gray-600"}>
                <div className={"w-full h-fit py-3 px-2 flex items-center justify-between border-b border-gray-600"}>
                    <div className={"ml-2 flex items-center"}>
                        {loading ? <Emp/> : <UserCard role={emp?.role || "Emply"} name={emp?.name || "Emply"} description={emp?.description || "Emply"}/>}
                    </div>
                </div>
                <RootUser/>
            </div>
        </div>
    );
};
