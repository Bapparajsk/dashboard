"use client";

import {Button, Tooltip, CardBody, Card, Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    useDisclosure,} from "@heroui/react";
import {Icon, IconArrowRight, IconBell, IconMail} from "@tabler/icons-react";
import {CardTab} from "@/components/ui/CardTab";
import {useQueryState} from "nuqs";
import {useState} from "react";
import {ButtonProps} from "@heroui/button";

interface ButtonType {
    key: "inbox" | "notification";
    title: "Inbox" | "Notification";
    Icon: Icon;
    tooltip?: string;
    color?: ButtonProps["color"]
}

const ButtonList: ButtonType[] = [
    {key: "inbox", title: "Inbox", Icon: IconMail, color: "primary"},
    {key: "notification", title: "Notification", Icon: IconBell, color: "warning"},
];

export const ProfileNav = () => {

    const [buttons, setButtons] = useState(ButtonList);
    const [drawerTab, setDrawerTab] = useQueryState("drawer-tab", { defaultValue: "" });

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const handleClick = (key: ButtonType["key"]) => {
        setDrawerTab(key).catch(console.error);
        onOpenChange();
        onOpen();
    };

    return (
        <>
            <Card fullWidth={true} className={"h-full border border-gray-700"}>
                <CardBody className={"px-20 flex-row items-center justify-between"}>
                    <div className={""}>

                    </div>
                    <div className={"flex items-center justify-center gap-3"}>
                        {buttons.map(({key, Icon, tooltip, title, color}) => (
                            <Tooltip key={key} content={tooltip || title} color={"foreground"} showArrow={true}>
                                <Button
                                    onPress={() => handleClick(key)}
                                    isIconOnly={true}
                                    radius={"lg"}
                                    variant={"faded"}
                                    color={color}
                                >
                                    <Icon size={20}/>
                                </Button>
                            </Tooltip>
                        ))}
                    </div>
                </CardBody>
            </Card>
            <Drawer
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                backdrop={"blur"}
                size={"xl"}
                closeButton={
                    <Button onPress={onOpenChange} isIconOnly={true} variant={"flat"} >
                        <IconArrowRight size={20}/>
                    </Button>
                }
            >
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex flex-col gap-1">
                                <CardTab
                                    items={buttons}
                                    defaultSelectedKey={drawerTab}
                                    onSelectionChange={(e) => {
                                        if (typeof e !== "string") return;
                                        setDrawerTab(e).catch(console.error);
                                    }}
                                    onChange={onClose}
                                    variant={"bordered"}
                                />
                            </DrawerHeader>
                            <DrawerBody>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                    risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                    quam.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                    risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                    quam.
                                </p>
                                <p>
                                    Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                                    adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                                    officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                                    nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                                    deserunt nostrud ad veniam.
                                </p>
                            </DrawerBody>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    );
};
