"use client";

import {Profile} from "@/components/user/render/Profile";
import { AnimatePresence, motion } from "motion/react";
import {Wrapper} from "@/components/user/render/Wrapper";
import {useUserList} from "@/context/userListContext";

export const RenderUser = () => {

    const { selectedUserId, userTab } = useUserList();

    if(!selectedUserId) return <div className={"w-full h-full flex items-center justify-center"}>
        <h1 className="text-3xl font-semibold text-gray-500 text-center">Select a user to view</h1>
    </div>;

    return (
        <AnimatePresence mode="wait" >
            <motion.div
                key={userTab === "profile" ? "profile" : "Wrapper"}
                initial={{ x: 500 }}
                animate={{ x: 0 }}
                exit={{ x: -500 }}
                transition={{ duration: 0.3, type: "spring" }}
                className={"w-full h-full"}
            >
                {selectedUserId && userTab === "profile" ? <Profile /> :
                    <Wrapper/>}
            </motion.div>
        </AnimatePresence>
    );
};


