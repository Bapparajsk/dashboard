"use client";

import {AnimatePresence, motion} from "motion/react";
import {useDrawerContext} from "@/context/drawerContext";
import {Inbox} from "./Inbox";
import {Notification} from "./Notification";
import {ReactNode} from "react";

export const Wrapper = () => {

    const {drawerTab} = useDrawerContext();

    return (
        <div className="w-full h-full flex flex-col">
            <div className={"w-full h-16 flex items-center"}>
                <AnimatePresence mode={"wait"}>
                    <motion.div
                        key={drawerTab}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className={"w-full h-full flex items-center font-semibold text-2xl"}
                    >
                        {drawerTab === "notification" ? "Notification" : "Inbox"}
                    </motion.div>
                </AnimatePresence>
            </div>
            {drawerTab === "notification" ? <Notification/> : <Inbox/>}
        </div>
    );
};

export const ComponentWrapper = ({children} : Readonly<{children: ReactNode}>) => {
    return (
        <div className={"relative w-full h-full overflow-y-auto"}>
            {children}
        </div>
    );
};
