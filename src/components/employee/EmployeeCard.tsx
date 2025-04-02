import {cn} from "@heroui/react";
import * as user from "@/components/ui/User";
import {EmployeeCardProps} from "&/components/employee/EmployeeCard";
import {dateFormat} from "@/lib/format";

export const EmployeeCard = ({id, name, description, role, isOnline, lastOnline, isNew, refUser, targetClosest, isSelected, logCount}: EmployeeCardProps) => {

    const Badge = ({ text, bg }: {text: string, bg: string}) => (
        <div className={`rounded-md px-2 py-0.5 ml-2 h-fit text-[11px] ${bg} text-white`}>
            <span>{text}</span>
        </div>
    );

    const createUserCardName = () => {
        return (
            <div className="flex items-center font-bold">
                <div>{name} :</div>
                {isNew && <Badge text="New Employee" bg="bg-gradient-to-r from-red-500 to-orange-500" />}
                {refUser && <Badge text={refUser} bg="bg-[#1E90FF]"/>}
                {logCount && logCount > 0 && <Badge text={`${logCount} Logs`} bg="bg-gradient-to-r from-purple-500 to-pink-500" />}
            </div>
        );
    };

    return (
        <div className={`w-full h-fit flex items-center justify-center mb-2 ${targetClosest?.substring(1)}`} data-id={id}>
            <div
                className={cn(
                    "user-card w-full h-full flex items-center justify-between px-3 py-3 border border-gray-600 rounded-lg cursor-pointer transition-all duration-300",
                    "hover:scale-[1.015] active:scale-[0.95]",
                    isSelected && "scale-[1.015] border-blue-500 bg-blue-500/10",
                )}
            >
                <user.UserCard
                    name={createUserCardName()}
                    role={role || "employee"}
                    description={description || "@description"}
                    avatarProps={{
                        alt: name,
                        isBordered: isOnline,
                        color: isOnline ? "primary" : "default",
                        size: "sm",
                    }}
                />
                {(lastOnline || isOnline) && (
                    <div className="w-fit h-full flex items-center justify-center">
                        <div className={`px-2 py-1 border rounded-xl border-gray-600 ${isOnline ? "shadow-[0_0_10px_rgba(255,255,255,.5)]" : ""}`}>
                        <span className="font-semibold text-[12px]">
                            {lastOnline ? dateFormat(lastOnline) : "Online" }
                        </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
