"use client";
import {cn, User} from "@heroui/react";
import {useNavigation} from "@/lib/navigation";
import {UserProps} from "&/components/ui/User";


export const UserCard = ({ className, name, role, description, imageSrc, onClick }: UserProps) => {

    const { pushNavigation } = useNavigation();
    const userClick = () => onClick ? onClick() :pushNavigation("/profile");

    return (
        <User
            className={cn("cursor-pointer", className)}
            isFocusable={true}
            onClick={userClick}
            name={<p className={"font-semibold"}>{name}</p>}
            role={role}
            description={description}
            avatarProps={{
                src: imageSrc
            }}
        />
    );
};
