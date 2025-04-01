import {cn} from "@heroui/react";
import * as user from "@/components/ui/User";
import {EmployeeCardProps} from "&/components/employee/EmployeeCard";
import {dateFormat} from "@/lib/format";

export const EmployeeCard = ({id, name, description, role, isOnline, lastOnline, isNew, refUser, targetClosest, isSelected}: EmployeeCardProps) => {

    const createUserCardName = () => {
        return (
            <div className={"flex items-center font-semibold"}>
                <p>{name}</p>
                {isNew && <div className={"rounded-md px-1 ml-1 h-fit bg-red-500 text-white text-[10px]"}>
                    <span>new Employee</span>
                </div>}
                <div className={"rounded-md px-1 ml-1  h-fit text-[10px] bg-[#1E90FF] text-white"}>
                    <span>{refUser}</span>
                </div>
            </div>
        );
    };

    return (
        <div className={`w-full h-fit flex items-center justify-center mb-2 ${targetClosest?.substring(1)}`} data-id={id}>
            <div
                className={cn(
                    "user-card w-full h-full flex items-center justify-between px-3 py-3 border border-gray-600 rounded-lg cursor-pointer transition-all duration-300",
                    "hover:scale-[1.015] active:scale-[0.90]",
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
                {lastOnline && <div className={"w-fit h-full flex items-center justify-center"}>
                    <div className={"px-2 py-1 relative border rounded-xl border-gray-600"}>
                        <span className={"font-semibold text-[12px]"}>{dateFormat(lastOnline)}</span>
                    </div>
                </div>}
                {isOnline && <div className={"w-fit h-full flex items-center justify-center"}>
                    <div className={"px-2 py-1 relative border rounded-xl border-gray-600"}>
                        <span className={"font-semibold text-[12px]"}>Online</span>
                    </div>
                </div>}
            </div>
        </div>
    );
};
