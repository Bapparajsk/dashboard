import {EmployeeDeletes, EmployeeList} from "@/components/employee";

const Employee = () => {
    return (
        <div className={"w-full h-full flex"}>
            <div className={"w-2/3 h-full"}>
                <EmployeeList/>
            </div>
            <div className={"w-[1px] h-full bg-gray-600"}/>
            <div className={"w-1/2 h-full"}>
                <EmployeeDeletes/>
            </div>
        </div>
    );
};

export default Employee;
