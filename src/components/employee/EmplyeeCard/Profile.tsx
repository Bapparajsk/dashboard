import Image from "next/image";
import {
    IconCarambola,
    IconCarambolaFilled,
    IconCrown,
    IconLaurelWreath, IconLaurelWreathFilled,
    IconMilitaryAward,
    IconTrash
} from "@tabler/icons-react";
import {useEmpContext} from "@/context/empContext";
import {cn, Input} from "@heroui/react";
import {Button, ButtonProps} from "@heroui/button";
import {Tooltip} from "@heroui/tooltip";
import {useRef, useState} from "react";

interface DeletesItemType {
    title: string;
    value: string | string[];
    isEditable: boolean;
    buttons?: ButtonProps[];
}

const deletesItems: DeletesItemType[] = [
    {
        title: "Employee Id",
        value: "123456",
        isEditable: false,
    },
    {
        title: "Status",
        value: "Online",
        isEditable: false,
    },
    {
        title: "Role",
        value: "Developer",
        isEditable: true,
        buttons: [
            {
                title: "Edit Role",
                color: "success",
                onPress: () => {
                    console.log("Edit Role");
                },
            },
        ]
    },
    {
        title: "Email",
        value: "sohely09@gmail.com",
        isEditable: false,
    },
    {
        title: "Level",
        value: "Diamond",
        isEditable: true,
        buttons: [
            {
                title: "Promote",
                onPress: () => {
                    console.log("Promote");
                },
                color: "success",
            },
            {
                title: "Demote",
                onPress: () => {
                    console.log("Demote");
                },
                color: "danger",
            }
        ],
    },
    {
        title: "Ref User",
        value: "John Doe",
        isEditable: false,
    },
    {
        title: "Location",
        value: "New York",
        isEditable: false,
    },
    {
        title: "Registration Date",
        value: "2023-01-01",
        isEditable: false,
    },
    {
        title: "Permissions",
        value: [
            "Read",
            "Write",

        ],
        isEditable: true,
        buttons: [
            {
                title: "Edit Permission",
                color: "warning",
                onPress: () => {
                    console.log("Add Permission");
                },
            },
        ],
    }
];

export const Profile = () => {

    const indicatorRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [userD, setUserD] = useState(deletesItems);
    const { selectedEmployee } = useEmpContext();
    deletesItems[1].value = selectedEmployee?.isOnline ? "Online" : "Offline";

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const parent = event.currentTarget;
        const indicator = indicatorRef.current;

        if (!indicator) return;

        // Find the closest item div
        const target = (event.target as HTMLElement).closest(".hover-item") as HTMLElement;

        if (target && parent.contains(target)) {
            const top = target.offsetTop;
            indicator.style.top = `${top+6}px`;
            indicator.style.opacity = "1";
        } else {
            indicator.style.opacity = "0";
        }
    };

    const handleMouseLeave = () => {
        const indicator = indicatorRef.current;
        if (indicator) {
            indicator.style.opacity = "0";
        }
    };

    return (
        <div className={"w-full h-full"}>
            <div className={"w-full h-80 flex border-b border-gray-600"}>
                <div className={"relative w-full h-full flex flex-col items-center justify-center gap-3 bg-employee-level-diamond"}>
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
                            <IconCrown size={40} color={"#FFD700"}/>
                            <IconMilitaryAward size={40} color={"#FFD700"}/>
                            <IconLaurelWreathFilled size={30} color={"#FFD700"}/>
                            <IconCarambolaFilled  color={"#FFD700"}/>
                        </div>
                        <p className={"text-gray-500"}>{selectedEmployee?.role}</p>
                    </div>
                    <div className={"absolute bottom-2 right-2"}>
                        <Tooltip content={"Delete Employee"} color={"danger"} showArrow placement={"left"}>
                            <Button variant={"ghost"} color={"danger"} isIconOnly={true} size={"sm"} radius={"lg"}>
                                <IconTrash size={18}/>
                            </Button>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className={"relative w-full h-fit flex flex-col items-center justify-center gap-2 py-2 px-2"}
            >
                <div ref={indicatorRef} style={{ top: 0, opacity: 0 }} className={"w-[6px] h-7 absolute left-2 bg-gray-100 rounded-xl transition-all duration-300 ease-in-out"}/>
                {userD.map((item, idx) => (
                    <div
                        key={idx}
                        ref={(el) => {itemRefs.current[idx] = el;}}
                        className={"hover-item w-full flex items-center justify-between gap-2 group cursor-pointer font-semibold"}
                    >
                        <div
                            className={"w-1/3 flex items-center justify-start text-gray-400 ml-4 transition-all duration-300 ease-in-out group-hover:translate-x-2 group-hover:text-gray-100"}>
                            {item.title}
                        </div>
                        <div className={"w-full flex"}>
                            <Input
                                isDisabled={true}
                                variant={"bordered"}
                                value={Array.isArray(item.value) ? item.value.join(", ") : item.value}
                            />
                            {item.isEditable && item.buttons && item.buttons.length > 0 && (
                                <div className={"flex gap-2 ml-2"}>
                                    {item.buttons.map((button, index) => (
                                        <Button
                                            key={index}
                                            variant={"faded"}
                                            radius={"lg"}
                                            className={cn("font-semibold", button.className)}
                                            {...button}

                                        >
                                            {button.title}
                                        </Button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

