import {Icon} from "@tabler/icons-react";
import {Key} from "react";

export interface CardTabProps {
    defaultSelectedKey: string;
    onSelectionChange: (key: Key) => void;
    isDisabled: boolean;
    ariaLabel?: string;
    tabs: {
        key: string;
        title: string;
        Icon: Icon;
    }[]
}
