"use client";

import {AnimatePresence, motion} from "motion/react";
import {useDrawerContext} from "@/context/drawerContext";
import {Inbox} from "./Inbox";
import {Notification} from "./Notification";
import {WrapperCardProps} from "&/components/drawerComponents/notification";
import {Card, CardBody, ScrollShadow, User} from "@heroui/react";
import {dateFormat} from "@/lib/format";
import {ComponentWrapperProps} from "&/components/drawerComponents/wrapper";
import {UsersList} from "@/components/drawerComponents/UsersList";

export const Wrapper = () => {

    const {drawerTab} = useDrawerContext();

    return (
        <div className="w-full h-full flex flex-col">
            <div className={"w-full h-[6%] flex items-center justify-between"}>
                <AnimatePresence mode={"wait"}>
                    <motion.div
                        key={drawerTab}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className={"w-full h-full flex items-center font-semibold text-2xl"}
                    >
                        {drawerTab === "notification" ? "Notification" : "Inbox"}
                    </motion.div>
                </AnimatePresence>
                <AnimatePresence mode={"wait"}>
                    <motion.div
                        key={drawerTab}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className={"h-full flex items-center font-semibold text-2xl"}
                    >
                        {drawerTab === "inbox" && <UsersList/>}
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className={"w-full h-[94%]"}>
                {drawerTab === "notification" ? <Notification/> : <Inbox/>}
            </div>
        </div>
    );
};

export const ComponentWrapper = ({children, onPress, title} : ComponentWrapperProps) => {
    return (
        <ScrollShadow
            onClick={onPress}
            key={title}
            className={"relative w-full h-full overflow-y-auto space-y-2 pr-3"}
        >
            {children}
        </ScrollShadow>
    );
};

export const WrapperCard = ({ description, title, time, avatarSrc, isInboxCard, isOnline, onPress }: WrapperCardProps) => {
    return (
        <Card onPress={onPress} fullWidth={true} className={`border border-[#18181B] ${isInboxCard && "cursor-pointer hover:border-blue-500 hover:bg-blue-600/10"}`}>
            <CardBody>
                <div className={"flex items-center justify-between"}>
                    <User
                        className={"font-semibold"}
                        name={title}
                        description={description}
                        avatarProps={{
                            src: avatarSrc,
                            isBordered: isOnline,
                            color: "success"
                        }}
                    />
                    <div className={"text-sm text-gray-500"}>{dateFormat(time)}</div>
                </div>
            </CardBody>
        </Card>
    );
};
