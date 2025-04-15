import {Icon} from "@tabler/icons-react";

export interface ButtonDataType {
    Icon: Icon;
    label: string;
    link?: string;
    isDanger?: boolean;
    onClick?: () => void;
}
