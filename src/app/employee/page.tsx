import {UserList} from "@/components/user";

const Employee = () => {
    return (
        <div className="h-full">
            <UserList isEmployee={true}/>
        </div>
    );
};

export default Employee;
