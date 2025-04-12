import {ReactNode} from "react";
import {InputProps} from "@heroui/input";
import {TabsProps} from "@heroui/tabs";
import {Icon} from "@tabler/icons-react";

export interface FilterProps {
    className?: string;
    InputProps?: InputProps;
    TabsProps?: TabsProps & {
        tabs: {key: string, title: string, Icon: Icon}[];
    }
    filterComponent?: ReactNode;
}
