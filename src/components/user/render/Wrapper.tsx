import {UserCard} from "@/components/ui/User";
import {Emp} from "@/components/skeletons/Emp";
import {useUserContext} from "@/context/userContext";
import {useUserTab} from "@/hooks/List";
import { AnimatePresence, motion } from "@/lib/motion";
import {Emails} from "@/components/user/render/Emails";
import {SendEmail} from "@/components/user/render/SendEmail";
import {Notifications} from "@/components/user/render/Notifications";

export const Wrapper = () => {

    const { user, loading_user } = useUserContext();
    const { userTab } = useUserTab();


    const tabComponents  = {
        "emails": <Emails/>,
        "sendEmail": <SendEmail/>,
        "sendNotifications": <Notifications/>
    };

    return (
        <div className={"w-full h-full"}>
            <div className={"w-full h-fit p-3 border-b border-gray-600"}>
                {loading_user ? <Emp/> : <UserCard
                    name={user?.isEmailVerified ? user?.name : < >{user?.name} : <span
                        className={"text-danger-400"}>Not Verified</span></>}
                    role={"user"}
                    description={user?.description ? "@" + user?.description : "description"}
                    avatarProps={{
                        alt: "User Avatar",
                        isBordered: user?.online,
                        color: user?.online ? "primary" : "default",
                        size: "sm",
                    }}
                />}
            </div>
            <AnimatePresence mode={"wait"}>
                <motion.div
                    key={userTab}
                    initial={{ x: 500 }}
                    animate={{ x: 0 }}
                    exit={{ x: -500 }}
                    transition={{ duration: 0.3, type: "spring" }}
                >
                    {tabComponents[userTab as keyof typeof tabComponents]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
