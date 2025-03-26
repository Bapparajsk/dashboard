"use client";

import {Button} from "@heroui/button";
import {Badge} from "@heroui/badge";
import {IconBell, IconMail} from "@tabler/icons-react";
import {LogoutIcon} from "@/components/ui/LogoutIcon";
import {ButtonDataType} from "&/components/navbar/navButtons";
import {useState} from "react";

const ButtonData: ButtonDataType[] = [
    {
        button: { variant: "bordered", className: "hover:text-primary-500 hover:border-primary-400" },
        badge: { color: "primary", content: undefined },
        icon: { Icon: IconMail, iconClassName: "transition-transform group-hover:scale-125" }
    },
    {
        button: { variant: "bordered", className: "hover:text-warning-500 hover:border-warning-400" },
        badge: { color: "warning", content: undefined },
        icon: { Icon: IconBell, iconClassName: "group-hover:animate-bell-spin" }
    },
];

export const NavButtons = () => {

    const [buttons,] = useState(ButtonData);

    return (
        <div className={"w-auto px-2 flex gap-2"}>
            {buttons.map(({button, badge, icon: {Icon, iconClassName}}, index) => (
                <Button isIconOnly={true}  variant={button.variant} className={`text-gray-400 group ${button.className}`} key={index}>
                    <Badge  showOutline={false} color={badge.color} content={badge.content}>
                        <Icon size={20} stroke={2} className={iconClassName}/>
                    </Badge>
                </Button>
            ))}
            <Button isIconOnly={true} variant="bordered" className="icon-button text-gray-400 hover:text-danger-400 hover:border-danger-400">
                <LogoutIcon/>
            </Button>
        </div>
    );
};
