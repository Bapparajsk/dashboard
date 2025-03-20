import { AvatarProps } from "@heroui/avatar";

export interface UserProps {
    className?: string;
    onClick?: () => void;
    name: string;
    role: string;
    description: string;
    avatarProps?: AvatarProps
    url?: string;
    isClickable?: boolean;
}
