"use client";

import {Tab, Tabs} from "@heroui/react";

export const NavTabs = () => {

    return (
        <Tabs aria-label="Tabs variants" className={"font-semibold"} variant={"underlined"}>
            <Tab key="all" title="All" />
            <Tab key="user" title="User" />
            <Tab key="post" title="Post" />
            <Tab key="api" title="API" />
        </Tabs>
    );
};
