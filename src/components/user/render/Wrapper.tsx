import {UserCard} from "@/components/ui/User";
import {Emp} from "@/components/skeletons/Emp";
import { AnimatePresence, motion } from "@/lib/motion";
import {Reports} from "@/components/user/render/Reports";
import {Notifications} from "@/components/ui/Notifications";
import {useUserList} from "@/context/userListContext";
import {Posts} from "@/components/user/render/Posts";

const tabComponents  = {
    "reports": <Reports/>,
    "send-notification": <Notifications/>,
    "posts": <Posts/>
};

export const Wrapper = () => {

    const { user, loading_user, userTab } = useUserList();

    return (
        <div className="w-full h-full flex flex-col">
            {/* User Section */}
            <div className="w-full h-auto py-3 px-3 border-b border-gray-600 flex items-center">
                {loading_user ? (
                    <Emp />
                ) : (
                    <UserCard
                        name={
                            user?.isEmailVerified ? (
                                user?.name
                            ) : (
                                <>
                                    {user?.name} : <span className="text-danger-400">Not Verified</span>
                                </>
                            )
                        }
                        role="user"
                        description={user?.description ? "@" + user?.description : "description"}
                        avatarProps={{
                            alt: "User Avatar",
                            isBordered: user?.online,
                            color: user?.online ? "primary" : "default",
                            size: "sm",
                        }}
                    />
                )}
            </div>
            <AnimatePresence mode={"wait"}>
                <motion.div
                    key={userTab}
                    initial={{ x: 500 }}
                    animate={{ x: 0 }}
                    exit={{ x: -500 }}
                    transition={{ duration: 0.3, type: "spring" }}
                    className={"w-full h-full overflow-y-scroll scrollbar-hide"}
                >
                    {tabComponents[userTab as keyof typeof tabComponents]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};




