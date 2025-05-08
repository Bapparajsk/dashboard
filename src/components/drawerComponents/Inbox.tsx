import {ComponentWrapper, WrapperCard} from "./Wrapper";
import {WrapperCardProps} from "&/components/drawerComponents/notification";
import {IconArrowLeft, IconSend, IconSignature, IconTrash} from "@tabler/icons-react";
import {Button, Input, User} from "@heroui/react";

const notificationData: WrapperCardProps[] = [
    {
        title: "Change Password",
        description: "your password has been changed successfully.",
        time: new Date(),
        avatarSrc: "/change-password.webp"
    },
    {
        title: "Change Avatar",
        description: "your avatar has been changed successfully.",
        time: new Date(),
        avatarSrc: "/change-avter.jpg"
    },
    {
        title: "New Message",
        description: "Do not forget to check your inbox.",
        time: new Date("2025-5-03-12:00"),
        avatarSrc: "/alert.jpg"
    },
];

export const Inbox = () => {
    return (
        <>
            <ComponentWrapper
                onPress={() => {
                    console.log("Inbox");
                }}
                title={"inbox"}
            >
                {notificationData.map((notification, index) => (
                    <WrapperCard
                        key={index}
                        {...notification}
                    />
                ))}
                {notificationData.map((notification, index) => (
                    <WrapperCard
                        key={index}
                        {...notification}
                    />
                ))}
                {notificationData.map((notification, index) => (
                    <WrapperCard
                        key={index}
                        {...notification}
                    />
                ))}
                {notificationData.map((notification, index) => (
                    <WrapperCard
                        key={index}
                        {...notification}
                    />
                ))}
                {notificationData.map((notification, index) => (
                    <WrapperCard
                        key={index}
                        {...notification}
                    />
                ))}
                {notificationData.map((notification, index) => (
                    <WrapperCard
                        key={index}
                        {...notification}
                    />
                ))} {notificationData.map((notification, index) => (
                <WrapperCard
                    key={index}
                    {...notification}
                />
            ))}
            </ComponentWrapper>
            {/*<SelectEmail/>*/}
        </>
    );
};

function SelectEmail () {
    return (
        <div className={"w-full h-full flex flex-col"}>
            <div className={"w-full h-[10%] flex items-center justify-between border-b border-gray-600"}>
                <div className={"flex gap-1 items-center"}>
                    <Button isIconOnly={true} variant={"flat"} radius={"lg"}>
                        <IconArrowLeft/>
                    </Button>
                    <User
                        name={"Inbox"}
                        role={"User"}
                        description={"You have 3 unread messages"}
                    />
                </div>
                <div className={"flex gap-2"}>
                    <Button isIconOnly={true} variant={"faded"} color={"danger"} content={"Delete All"} radius={"lg"}>
                        <IconTrash size={20}/>
                    </Button>
                </div>
            </div>
            <div className={"w-full h-[82%] overflow-y-auto"}>
            </div>
            <div className={"w-full h-[8%] flex items-center gap-2"}>
                <Input
                    startContent={<IconSignature className={"text-gray-400"}/>}
                    ref={r => { if(r) r.focus(); }}
                    fullWidth={true}
                />
                <Button isIconOnly={true} variant={"ghost"} color={"primary"}>
                    <IconSend size={20}/>
                </Button>
            </div>
        </div>
    );
}
