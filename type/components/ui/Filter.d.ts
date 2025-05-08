import {ReactNode} from "react";
import {InputProps} from "@heroui/input";
import {TabsProps} from "@heroui/tabs";
import {ButtonProps} from "@heroui/button";
import {Icon} from "@tabler/icons-react";

export interface FilterProps {
    className?: string;
    InputProps?: InputProps;
    TabsProps?: TabsProps & {
        tabs: {key: string, title: string, Icon: Icon}[];
    }
    createNewButton?: {
        icon?: {
            Icon?: Icon;
            size?: number;
            className?: string;
        };
        buttonProps?: ButtonProps;
    };
    filterComponent?: ReactNode;
    showBorder?: boolean;
}
