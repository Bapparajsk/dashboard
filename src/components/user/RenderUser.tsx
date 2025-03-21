import {useSelectedUser, useUserTab} from "@/hooks/List";
import {Profile} from "@/components/user/render/Profile";
import { AnimatePresence, motion } from "motion/react";
import {Wrapper} from "@/components/user/render/Wrapper";

export const RenderUser = () => {

    const { userTab } = useUserTab();
    const { selectedUserId } = useSelectedUser();

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


