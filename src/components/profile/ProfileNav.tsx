"use client";

import {Button, ButtonProps, CardBody, Card, Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    useDisclosure,} from "@heroui/react";
import {
    Icon,
    IconArrowBarToLeft,
    IconArrowBarToRight,
    IconBell,
    IconMail
} from "@tabler/icons-react";
import {CardTab} from "@/components/ui/CardTab";
import {useQueryState} from "nuqs";
import {useState} from "react";

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

    const {isOpen, onOpenChange} = useDisclosure();

    return (
        <>
            <Card fullWidth={true} className={"h-full border border-gray-700"}>
                <CardBody className={"px-10 flex-row items-center justify-end"}>
                    <div className={"flex gap-2"}>
                        {
                            buttons.map((button) => (
                                <Button
                                    key={button.key}
                                    color={button.color}
                                    variant={"faded"}
                                    isIconOnly={true}
                                    onPress={() => {
                                        setDrawerTab(button.key).catch(console.error);
                                        onOpenChange();
                                    }}
                                >
                                    <button.Icon size={20}/>
                                </Button>
                            ))
                        }
                        <Button onPress={onOpenChange} isIconOnly={true} variant={"ghost"}>
                            <IconArrowBarToLeft size={20}/>
                        </Button>
                    </div>
                </CardBody>
            </Card>
            <Drawer
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                backdrop={"blur"}
                size={"xl"}
                hideCloseButton={true}
            >
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="w-full flex items-center justify-between">
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
                                <Button  onPress={onOpenChange} isIconOnly={true} variant={"flat"} >
                                    <IconArrowBarToRight size={20}/>
                                </Button>
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
