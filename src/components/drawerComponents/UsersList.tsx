import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    Button,
    useDisclosure, ScrollShadow, Tooltip,
} from "@heroui/react";
import {IconPlus} from "@tabler/icons-react";
import {WrapperCard} from "@/components/drawerComponents/Wrapper";
import {WrapperCardProps} from "&/components/drawerComponents/notification";
import {Fragment} from "react";

const notificationData: WrapperCardProps[] = [
    {
        title: "Change Password",
        description: "Hey",
        time: new Date(),
        avatarSrc: "/change-password.webp"
    },
    {
        title: "Change Avatar",
        description: "it's me",
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

export const UsersList = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <Fragment>
            <Tooltip color={"primary"} content={"Add new user"}>
                <Button
                    variant={"ghost"}
                    size={"sm"}
                    radius={"lg"}
                    color={"primary"}
                    className={"font-semibold"}
                    isIconOnly={true}
                    onPress={onOpen}
                >
                    <IconPlus size={18}/>
                </Button>
            </Tooltip>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={"lg"}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <div className="text-lg font-semibold">Employs</div>
                            </ModalHeader>
                            <ModalBody>
                                <ScrollShadow>
                                    <div className={"w-full h-fit max-h-[70vh] overflow-y-auto space-y-2 pr-3"}>
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
                                                isOnline={true}
                                                isInboxCard={true}
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

                                    </div>
                                </ScrollShadow>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </Fragment>
    );
};
