import {Key} from "react";
import {Icon} from "@tabler/icons-react";

export interface FilterProps {
    className?: string;
    InputProps?: {
        placeholder?: string;
        onChange?: (value: string) => void;
        onSubmit?: (value: string) => void;
    };
    TabsProps?: {
        defaultSelectedKey?: string;
        onSelectionChange?: (key: Key) => void;
        tabs: {key: string, title: string, Icon: Icon}[]
    }
}
