import {Icon} from "@tabler/icons-react";
import {ReactNode} from "react";

export interface RenderUserProps {
    user: UserType | undefined;
}

interface UserType {
    id: number;
    name: string;
    description: string;
    isEmailVerified: boolean;
    online: boolean;
    friendCount: number;
    postCount: number;
}

export interface UserActionButtonProps {
    Icon: Icon;
    label: string | ReactNode;
    border?: "default" | "warning" | "danger";
}
