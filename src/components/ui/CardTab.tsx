    "use client";

import {Tab, Tabs, TabsProps} from "@heroui/react";
import {TabDataType} from "&/components/user/userList";

interface CardTabProps extends TabsProps {
    items: TabDataType[];
}

export const CardTab = ({items, ...props} : CardTabProps) => {
    return (
        <Tabs {...props}>
            {items.map(tab => (
                <Tab key={tab.key} title={
                    <div className={"flex gap-1 items-center"}>
                        <tab.Icon size={20}/>
                        <span>{tab.title}</span>
                    </div>
                }/>
            ))}
        </Tabs>
    );
};
