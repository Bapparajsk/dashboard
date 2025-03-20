import * as user from "@/components/ui/User";
import {UserCardProps} from "&/components/user/userCard";
import {cn} from "@heroui/react";
import {Button} from "@heroui/button";
import {IconMailShare} from "@tabler/icons-react";

export const UserCard = ({ name, description, isEmailVerified, idx }:UserCardProps) => {
    return (
        <div className={"w-full h-fit flex items-center justify-center mb-2"}>
            <div
                className={cn(
                    "user-card w-full h-full flex items-center justify-between px-3 py-3 border border-gray-600 rounded-lg cursor-pointer transition-all duration-300",
                    isEmailVerified ?  "hover:border-success-500" : "hover:border-warning-500",
                    "hover:scale-[1.015]"
                )}
                accessKey={idx.toString()}
            >
                <user.UserCard
                    name={name}
                    role={"user"}
                    description={description ? "@" + description : "description"}
                    avatarProps={{
                        alt: "User Avatar",
                        isBordered: true,
                        color: isEmailVerified ? "success" : "warning",
                        size: "sm",
                    }}
                />
                <div className={"flex items-center justify-center"}>
                    <Button isIconOnly={true} className={"group"}>
                        <IconMailShare
                            className={"text-gray-400 group-hover:text-blue-500"}
                            size={25}
                        />
                    </Button>
                </div>
            </div>
        </div>
    );
};
