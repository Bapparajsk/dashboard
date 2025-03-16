import {ButtonProps} from "@heroui/button";
import {BadgeProps} from "@heroui/badge";
import {Icon} from "@tabler/icons-react";

export interface ButtonDataType {
    button: { variant: ButtonProps["variant"], className: string, },
    badge: { color: BadgeProps["color"], content: BadgeProps["content"] },
    icon: { Icon: Icon , iconClassName: string }
}
