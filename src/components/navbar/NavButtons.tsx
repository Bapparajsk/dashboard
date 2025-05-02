"use client";

import {Button} from "@heroui/button";
import {Badge} from "@heroui/badge";
import {LogoutIcon} from "@/components/ui/LogoutIcon";
import {useState} from "react";
import {ButtonData} from "@/components/navbar/data";
import {NavButtonsProps} from "&/components/navbar/navButtons";
import {useDrawerContext} from "@/context/drawerContext";
import {cn} from "@heroui/react";

export const NavButtons = ({ showLogout, className }:NavButtonsProps) => {

    const [buttons,] = useState(ButtonData);
    const {selectDrawerTab} = useDrawerContext();

    return (
        <div className={cn("w-auto h-fit px-5 flex gap-2", className)}>
            {buttons.map(({key, button, badge, icon: {Icon, iconClassName}}) => (
                <Badge key={key} showOutline={false} color={badge.color} content={badge.content}>
                    <Button onPress={() => {selectDrawerTab(key);}} isIconOnly={true}  variant={button.variant} className={`text-gray-400 group ${button.className}`}>
                        <Icon size={20} stroke={2} className={iconClassName}/>
                    </Button>
                </Badge>
            ))}
            {showLogout && <div className={"w-[2px] h-[40px] bg-gray-600"}/>}
            {showLogout && (
                <Button isIconOnly={true} variant="bordered"
                        className="icon-button text-gray-400 hover:text-danger-400 hover:border-danger-400">
                    <LogoutIcon/>
                </Button>
            )}
        </div>
    );
};
