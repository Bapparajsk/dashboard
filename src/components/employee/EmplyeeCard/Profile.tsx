import Image from "next/image";
import {IconCarambolaFilled} from "@tabler/icons-react";
import {useEmpContext} from "@/context/empContext";
import {cn} from "@heroui/react";

interface DeletesItemType {
    title: string;
    value: string | string[];
}

const deletesItems: DeletesItemType[] = [
    {
        title: "Employee Id",
        value: "123456"
    },
    {
        title: "Role",
        value: "Developer"
    },
    {
        title: "Email",
        value: "sohely09@gmail.com"
    },
    {
        title: "Star",
        value: "1"
    },
    {
        title: "Ref User",
        value: "John Doe"
    },
    {
        title: "Location",
        value: "New York"
    },
    {
        title: "Registration Date",
        value: "2023-01-01"
    },
    {
        title: "Permissions",
        value: [
            "Read",
            "Write",
            "Execute"
        ]
    }
];

export const Profile = () => {

    const { selectedEmployee } = useEmpContext();

    return (
        <div className={"w-full h-full"}>
            <div className={"w-full h-80 flex border-b border-gray-600"}>
                <div className={"w-full h-full flex flex-col items-center justify-center gap-3 bg-hero-pattern"}>
                    <div className={"relative size-40 z-0"}>
                        <Image
                            height={500} width={500}
                            src={"https://wallpapercave.com/wp/wp2533091.jpg"}
                            alt={"Employee"}
                            className={cn("object-cover w-full h-full rounded-full border-3", selectedEmployee?.isOnline ? "border-green-500" : "border-gray-600")}
                        />
                    </div>
                    <div className={"text-center"}>
                        <div className={"flex gap-2 items-center text-2xl font-semibold text-gray-300"}>
                            <span>{selectedEmployee?.name}</span>
                            <IconCarambolaFilled color={"#FFD700"}/>
                        </div>
                        <p className={"text-gray-500"}>{selectedEmployee?.role}</p>
                    </div>
                </div>
            </div>
            <div className={"w-full h-fit flex flex-col items-center justify-center gap-2"}>
                {deletesItems.map((item, idx) => (
                    <div key={idx} className={"flex items-center justify-between w-full px-4 py-2 border-b border-gray-600"}>
                        <span className={"text-gray-500"}>{item.title}</span>
                        <span className={"text-gray-300"}>{
                            Array.isArray(item.value) ? item.value.join(", ") : item.value
                        }</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

