import { AvatarProps } from "@heroui/avatar";
import {ReactNode} from "react";

export interface UserProps {
    className?: string;
    onClick?: () => void;
    name: string | ReactNode;
    role: string;
    description: string;
    avatarProps?: AvatarProps
    url?: string;
    isClickable?: boolean;
}
