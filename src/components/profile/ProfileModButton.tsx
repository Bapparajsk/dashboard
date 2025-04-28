import {Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownItemProps, ButtonProps} from "@heroui/react";
import {
    Icon,
    IconZzz,
    IconUserScreen,
    IconMoodAngry,
    IconMoodSmileBeam,
    IconBug,
    IconWifi
} from "@tabler/icons-react";
import {useState} from "react";

type ModListType = "online" | "offline" | "code" | "error" | "angry" | "happy";

const modList: Record<ModListType, {title: string, Icon: Icon, props?: Partial<DropdownItemProps>}> = {
    online: {
        title: "Online",
        Icon: IconWifi,
        props: {
            color: "primary",
            className: "text-primary-500",
            variant: "solid",
        }
    },
    offline: {
        title: "Offline",
        Icon: IconZzz,
        props: {
            color: "warning",
            className: "text-warning-500",
            variant: "solid",
        }
    },
    angry: {
        title: "Angry",
        Icon: IconMoodAngry,
        props: {
            color: "danger",
            className: "text-danger-500",
            variant: "solid",
        }
    },
    happy: {
        title: "Happy",
        Icon: IconMoodSmileBeam,
        props: {
            color: "primary",
            className: "text-primary-500",
            variant: "solid",
        }
    },
    code: {
        title: "writing Code",
        Icon: IconUserScreen,
        props: {
            color: "success",
            className: "text-success-500",
            variant: "solid",
        }
    },
    error: {
        title: "Found Error",
        Icon: IconBug,
        props: {
            color: "danger",
            className: "text-danger-500",
            variant: "solid",
        }
    },
};

interface CurrentModType {
    color: ButtonProps["color"];
    Icon: Icon
}

export const ProfileModButton = () => {

    const [currentMod, setCurrentMod] = useState<CurrentModType>({ color: "primary", Icon: IconWifi });

    return (
        <Dropdown backdrop="blur" >
            <DropdownTrigger>
                <Button variant={"faded"} color={currentMod.color} radius={"lg"} isIconOnly={true}>
                    <currentMod.Icon size={20}/>
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                variant="faded"
                onAction={key => {
                    const item = modList[key as ModListType];
                    setCurrentMod({color: item.props?.color || "primary", Icon: item.Icon});
                }}
            >
                {Object.entries(modList).map(([key, {title, Icon, props}]) => (
                    <DropdownItem
                        key={key}
                        startContent={<Icon/>}
                        {...props}
                    >
                        {title}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
};
