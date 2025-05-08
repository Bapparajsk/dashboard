
import {
    IconUserCog,
    IconUserPlus,
    IconUserCode,
    IconUserMinus,
    IconSitemap,
    IconCpu,
    IconDatabase, IconDeviceFloppy, IconNetwork, IconServerCog, IconDeviceDesktop, IconInfoSquareRounded, IconServer2
} from "@tabler/icons-react";
import {ButtonDataType} from "&/components/ui/SidebarButton";
import {DropDown} from "@/components/sidebar/DropDown";

const employeeButtonData: ButtonDataType[] = [
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

const systemInfoButtonData: ButtonDataType[] = [
    {
        Icon: IconDeviceDesktop,
        label: "System Info",
        link: "/system-info",
        isDanger: true,
        props: {
            color: "primary",
            variant: "faded"
        }
    },
    {
        Icon: IconServer2,
        label: "Server Info",
        link: "/server-info",
        isDanger: true,
        props: {
            color: "primary",
            variant: "faded"
        }
    },
];

export const RootUserButtons = () => {
    return (
        <div className={"w-full h-auto py-2 px-3 font-semibold"}>
            <div className={"border-b border-gray-800 pb-1 "}>
                <DropDown
                    selectionMode={"single"}
                    itemList={[
                        {
                            key: "employee deletes",
                            title: { Icon: IconUserCog, label: "Employee Deletes" },
                            ariaLabel: "employee Deletes",
                            item: employeeButtonData
                        },
                        {
                            key: "info",
                            title: { Icon: IconInfoSquareRounded, label: "System & Server Info" },
                            ariaLabel: "information",
                            item: systemInfoButtonData
                        }
                    ]}
                />
            </div>
        </div>
    );
};
