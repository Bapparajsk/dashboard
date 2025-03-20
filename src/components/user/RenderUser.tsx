import {RenderUserProps} from "&/components/user/renderUser";
import {useUserTab} from "@/hooks/List";
import {Profile} from "@/components/user/render/Profile";
import { AnimatePresence, motion } from "motion/react";
import {Emails} from "@/components/user/render/Emails";
import {SendEmail} from "@/components/user/render/SendEmail";

export const RenderUser = ({ user }: RenderUserProps) => {

    const { userTab } = useUserTab();

    if (user === undefined) {
        return (
            <div className={"w-full h-full flex items-center justify-center"}>
                <div className={"text-gray-500"}>
                    Please Select a user
                </div>
            </div>
        );
    }

    return (
        <AnimatePresence mode="wait" >
            <motion.div
                key={userTab}
                initial={{ x: 500 }}
                animate={{ x: 0 }}
                exit={{ x: -500 }}
                transition={{ duration: 0.2, type: "keyframes" }}
            >
                {userTab === "profile" ? <Profile user={user}/> :
                    userTab === "emails" ? <Emails/> : <SendEmail/>}
            </motion.div>
        </AnimatePresence>

    );
};


