"use client";
import Image from "next/image";
import {
    Icon,
    IconAlertSmall,
    IconKey,
    IconMail,
    IconMapPin,
    IconUserCircle,
    IconUsersPlus
} from "@tabler/icons-react";
import {Button, Divider, Tooltip} from "@heroui/react";
import {ProfileModButton} from "@/components/profile/ProfileModButton";

interface Userdata {
    title: string;
    value: string;
}

const getIcon = ({title}: {title: string}): Icon => {
    switch (title) {
        case "Email":
            return IconMail;
        case "Role":
            return IconUserCircle;
        case "Location":
            return IconMapPin;
        case "Ref User":
            return IconUsersPlus;
        default:
            return IconAlertSmall;
    }
};

const data: Userdata[] = [
    {
        title: "Ref User",
        value: "@bappa"
    },
    {
        title: "Role",
        value: "Developer"
    },
    {
        title: "Email",
        value: "bapparajsk@gmail.com"
    },
    {
        title: "Location",
        value: "Dhaka, Bangladesh"
    },
];

const permissionslist = [
    "editor", "user", "developer", "editor","Admin", "user", "developer", "editor","Admin", "user", "developer", "editor","Admin", "user", "developer", "editor","Admin", "user", "developer", "editor","Admin", "user", "developer", "editor","Admin", "user", "developer", "editor"
];

export const UserVew = () => {
    return (
        <div className={"w-full h-full px-2 py-3 flex flex-col items-center"}>
            <div className={"w-5/6 flex flex-col items-center gap-2"}>
                <div className={"size-72 relative mb-5"}>
                    <Tooltip placement={"bottom"} showArrow={true} content={"Change profile Pitcher"} color={"foreground"}>
                        <Image
                            width={500}
                            height={500}
                            src={"https://www.powertrafic.fr/wp-content/uploads/2023/04/image-ia-exemple.png"}
                            alt={"user"}
                            loading={"lazy"}
                            className={"w-full h-full object-cover rounded-full border border-gray-500 cursor-pointer"}
                        />
                    </Tooltip>
                    <div className={"absolute bottom-14 right-0"}>
                        <ProfileModButton/>
                    </div>
                </div>
                <div className={"w-full flex flex-col gap-2 items-start justify-start "}>
                    <h2 className={"text-3xl font-semibold"}>Bappa Raj Sk</h2>
                    <p className={"text-xl text-gray-500 font-normal"}>
                        <span>Developer · he/him</span>
                    </p>
                    <div className={"w-full h-auto py-1"}>
                        <p className={"text-gray-300"}>
                            lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium ad alias aliquid
                        </p>
                    </div>
                </div>
                <div className={"w-full"}>
                    <Button fullWidth={true} variant={"faded"}>
                        Edit Profile
                    </Button>
                </div>
                <div className={"w-full flex flex-col gap-2 items-start justify-start"}>
                    {data.map((item, index) => (
                        <ProfileItem key={index} {...item}/>
                    ))}
                </div>
                <Divider className={"bg-gray-600"}/>
                <div className={"w-full flex flex-col gap-2 items-start justify-start"}>
                    <div className={"flex flex-col gap-2"}>
                        <div className={"flex items-center gap-2 text-gray-500"}>
                            <IconKey/>
                            <p className={"font-semibold text-gray-300"}>Permissions :</p>
                        </div>
                        <Divider className={"bg-gray-600"}/>
                    </div>
                    <div className={"relative w-full flex flex-wrap items-start gap-2 text-gray-500 h-fit max-h-40 overflow-y-auto"}>
                        {permissionslist.map((item, index) => (
                            <div key={index} className={"flex items-center gap-2 px-1"}>
                                <span className={"w-[6px] h-[25px] rounded-full bg-gray-600"}/>
                                <span className={"text-gray-300"}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

function ProfileItem({title, value}: Userdata) {
    const Icon = getIcon({title});
    return (
        <div className={"w-full flex items-center gap-2 text-gray-500"}>
            <div className={"flex items-center gap-2"}>
                <Icon size={20}/>
            </div>
            <div className={"flex items-center gap-2"}>
                <span className={"text-gray-300"}>{value}</span>
            </div>
        </div>
    );
}
