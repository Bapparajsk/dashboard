import {ButtonDataType} from "&/components/navbar/navButtons";
import {IconBell, IconMail, IconArrowBarToLeft} from "@tabler/icons-react";

export const ButtonData: ButtonDataType[] = [
    {
        button: { variant: "bordered", className: "hover:text-primary-500 hover:border-primary-400" },
        badge: { color: "primary", content: undefined },
        icon: { Icon: IconMail, iconClassName: "transition-transform group-hover:scale-125" },
        title: "Inbox",
        key: "inbox",
    },
    {
        button: { variant: "bordered", className: "hover:text-warning-500 hover:border-warning-400" },
        badge: { color: "warning", content: undefined },
        icon: { Icon: IconBell, iconClassName: "group-hover:animate-bell-spin" },
        title: "Notification",
        key: "notification"
    },
    {
        button: { variant: "bordered", className: "hover:text-primary-500 hover:border-primary-400" },
        badge: { color: "primary", content: undefined },
        icon: { Icon: IconArrowBarToLeft, iconClassName: "transition-transform group-hover:-translate-x-1" },
        title: "Drawer",
        key: "drawer"
    }
];
