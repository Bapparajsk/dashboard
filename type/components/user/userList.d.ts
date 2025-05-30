import {Icon} from "@tabler/icons-react";

export interface TabDataType {
    Icon: Icon;
    title: string;
    key: string;
}

export interface UserListProps {
    isEmployee?: boolean;
}
