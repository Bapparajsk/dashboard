import {Icon} from "@tabler/icons-react";
import {ReactNode} from "react";

export interface RenderUserProps {
    user: UserType | undefined;
}

interface UserType {
    name: string;
    description: string;
    isEmailVerified: boolean;
}

export interface UserActionButtonProps {
    Icon: Icon;
    label: string | ReactNode;
    border?: "default" | "warning" | "danger";
}
