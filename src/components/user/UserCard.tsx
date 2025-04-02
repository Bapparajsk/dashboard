import * as user from "@/components/ui/User";
import {UserCardProps} from "&/components/user/userCard";
import {cn} from "@heroui/react";
import {IconMail} from "@tabler/icons-react";

export const UserCard = ({ name, description, isEmailVerified, id, online, isSelected }: UserCardProps) => {

    const isSelectedClass = isEmailVerified ? "border-success-500 bg-success-500/10" : "border-warning-500 bg-warning-500/10";

    return (
        <div className={"w-full h-fit flex items-center justify-center mb-2"}>
            <div
                className={cn(
                    "user-card w-full h-full flex items-center justify-between px-3 py-3 border border-gray-600 rounded-lg cursor-pointer transition-all duration-300",
                    isEmailVerified ?  "hover:border-success-500" : "hover:border-warning-500",
                    isSelected && `${isSelectedClass} scale-[1.015]` ,
                    "hover:scale-[1.015] active:scale-[0.95]",
                    "user-card"

                )}
                data-id={id}
            >
                <user.UserCard
                    name={isEmailVerified ? name : < >{name} : <span className={"text-danger-400"}>Not Verified</span></>}
                    role={"user"}
                    description={description ? "@" + description : "description"}
                    avatarProps={{
                        alt: "User Avatar",
                        isBordered: online,
                        color: online ? "primary" : "default",
                        size: "sm",
                    }}
                />
                <div className={"flex items-center justify-center"}>
                    <div
                        className={"px-2 py-1 relative border rounded-xl border-gray-600 cursor-pointer"}
                    >
                        <IconMail color={"blue"}/>
                        <div className={"absolute w-5 h-5 -top-1 right-0 bg-primary-400 flex items-center justify-center rounded-full"}>
                            <span className={"font-semibold text-[12px]"}>7</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
