
import {IconUserCog, IconUserPlus, IconUserCode, IconUserMinus} from "@tabler/icons-react";
import {ButtonDataType} from "&/components/ui/SidebarButton";
import {SidebarButton} from "@/components/ui/SidebarButton";
import {DropDown} from "@/components/sidebar/DropDown";

const buttonData: ButtonDataType[] = [
    {
        Icon: IconUserCog,
        label: "Employees",
        link: "/employee",
    },
    {
        Icon: IconUserPlus,
        label: "Add Employee",
        link: "/employee",
    },
    {
        Icon: IconUserCode,
        label: "Employee Logs",
        link: "/employee",
    },
    {
        Icon: IconUserMinus,
        label: "Employee Remove",
        link: "/employee",
        isDanger: true,
    }
];

export const RootUser = () => {
    return (
        <div className={"w-full h-auto py-2 px-3 font-semibold "}>
            <div className={"border-b border-gray-600 pb-1 "}>
                <DropDown
                    selectionMode={"multiple"}
                    itemList={[
                        {
                            key: "employee deletes",
                            title: { Icon: IconUserCog, label: "Employee Deletes" },
                            ariaLabel: "employee Deletes",
                            children: (
                                <div className={"flex flex-col gap-2"}>
                                    {buttonData.map((buttonDatum, index) => (
                                        <SidebarButton key={index} {...buttonDatum}/>
                                    ))}
                                </div>
                            )
                        }
                    ]}
                />
            </div>
        </div>
    );
};
