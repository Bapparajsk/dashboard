import {RenderUser} from "@/components/user/RenderUser";
import {RenderUserList} from "@/components/user/RenderUserList";
import {UserListNav} from "@/components/user/UserListNav";
import {UserListProps} from "&/components/user/userList";
import {EmployeeDeletes, EmployeeList} from "@/components/employee";
import {cn} from "@heroui/react";

export const UserList = ({ isEmployee }: UserListProps) => {
    return (
        <div className={"w-full  h-full"}>
            <div className={"h-[7%]"}>
                <UserListNav isEmployee={isEmployee}/>
            </div>
            <div className={"w-full h-[93%] flex"}>
                <div className={cn("h-full", isEmployee ? "w-3/5" : "w-2/3")}>
                    {isEmployee ? <EmployeeList/> : <RenderUserList/>}
                </div>
                <div className={cn("h-full border-l border-gray-600 py-2 font-semibold space-y-2", isEmployee? "w-2/5" : "w-1/3")}>
                    <div className={"w-full h-full px-3"}>
                        <div className={"w-full h-full border border-gray-600 rounded-xl overflow-hidden"}>
                            {isEmployee ? <EmployeeDeletes/> : <RenderUser/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
