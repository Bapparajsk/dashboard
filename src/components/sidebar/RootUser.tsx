import {Accordion, AccordionItem} from "@heroui/accordion";
import {IconUserCog, IconUserPlus, IconUserCode, IconUserMinus, IconUserScan} from "@tabler/icons-react";
import {ButtonDataType} from "&/components/ui/SidebarButton";
import {SidebarButton} from "@/components/ui/SidebarButton";

const buttonData: ButtonDataType[] = [
    {
        Icon: IconUserCog,
        label: "Employees",
        link: "/employees",
        color: "blue"
    },
    {
        Icon: IconUserPlus,
        label: "Add Employee",
        link: "/employees/add",
        color: "green"
    },
    {
        Icon: IconUserCode,
        label: "Employee Logs",
        link: "/employees/logs",
        color: "purple"
    },
    {
        Icon: IconUserMinus,
        label: "Employee Remove",
        link: "/employees/remove",
        color: "red"
    }
];

export const RootUser = () => {
    return (
        <div className={"w-full h-auto py-2 px-3 font-semibold"}>
            <div className={"border-b border-gray-600"}>
                <Accordion selectionMode="multiple">
                    <AccordionItem key="employee deteles" aria-label="employee deteles" title="Employee Deteles">
                        <div className={"flex flex-col gap-2"}>
                            {buttonData.map((buttonDatum, index) => (
                                <SidebarButton key={index} {...buttonDatum}/>
                            ))}
                        </div>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className={"py-2 border-b  border-gray-600"}>
                <SidebarButton Icon={IconUserScan} color={"blue"} label={"Profile"} link={"/profiles"}/>
            </div>
        </div>
    );
};
