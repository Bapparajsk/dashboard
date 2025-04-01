"use client";
import {cn, User} from "@heroui/react";
import {useNavigation} from "@/lib/navigation";
import {UserProps} from "&/components/ui/user";


export const UserCard = ({ className, name, role, description, avatarProps, onClick, url, isClickable = false }: UserProps) => {

    const { pushNavigation } = useNavigation();
    const userClick = () => isClickable && (onClick ? onClick() : pushNavigation( url || "/profile"));

    return (
        <User
            className={cn("cursor-pointer", className)}
            isFocusable={true}
            onClick={userClick}
            name={<div className={"font-semibold"}>{name}</div>}
            role={role}
            description={description}
            avatarProps={avatarProps}
        />
    );
};
