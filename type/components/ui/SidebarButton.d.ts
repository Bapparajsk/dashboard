import {Icon} from "@tabler/icons-react";
import {ButtonProps} from "@heroui/button";

export interface ButtonDataType {
    Icon: Icon;
    label: string;
    link?: string;
    isDanger?: boolean;
    onClick?: () => void;
    props?: ButtonProps
}
