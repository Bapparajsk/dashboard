import {useSelectedUser, useUserTab} from "@/hooks/List";
import {Profile} from "@/components/user/render/Profile";
import { AnimatePresence, motion } from "motion/react";
import {Emails} from "@/components/user/render/Emails";
import {SendEmail} from "@/components/user/render/SendEmail";

export const RenderUser = () => {

    const { userTab } = useUserTab();
    const { selectedUser } = useSelectedUser();

    return (
        <AnimatePresence mode="wait" >
            <motion.div
                key={userTab}
                initial={{ x: 500 }}
                animate={{ x: 0 }}
                exit={{ x: -500 }}
                transition={{ duration: 0.3, type: "spring" }}
            >
                {selectedUser && userTab === "profile" ? <Profile /> :
                userTab === "emails" ? <Emails /> :
                userTab === "sendEmail" ? <SendEmail /> : <div className={"w-full h-full"}>
                    <div className={"w-full h-[60vh] flex justify-center items-center"}>
                        <div className={"text-3xl font-semibold text-gray-500"}>Select a user to view</div>
                    </div>
                </div>}
            </motion.div>
        </AnimatePresence>
    );
};


