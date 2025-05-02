"use client";

import {createContext, useContext, ReactNode} from "react";
import {Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, useDisclosure} from "@heroui/react";
import {CardTab} from "@/components/ui/CardTab";
import {IconArrowBarToRight} from "@tabler/icons-react";
import {useQueryState} from "nuqs";
import {DrawerContextType} from "&/context/drawerContext";
import {ButtonData} from "@/components/navbar/data";
import Wrapper from "@/components/drawerComponents";

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const DrawerProvider = ({children}: Readonly<{ children: ReactNode }>) => {
    const [drawerTab, setDrawerTab] = useQueryState("drawer-tab", { defaultValue: "" });
    const {isOpen, onOpenChange} = useDisclosure();

    const selectDrawerTab = (id: string) => {
        if (id === "drawer") {
            onOpenChange();
            return;
        }

        setDrawerTab(id).catch(console.error);
        onOpenChange();
    };

    const items =  ButtonData.filter(item => item.key !== "drawer").map(button => ({
        Icon: button.icon.Icon,
        title: button.title,
        key: button.key,
    }));

    return (
        <DrawerContext value={{ selectDrawerTab, drawerTab }}>
            {children}
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
                                    items={items}
                                    defaultSelectedKey={drawerTab}
                                    onSelectionChange={(e) => {
                                        if (typeof e !== "string") return;
                                        setDrawerTab(e).catch(console.error);
                                    }}
                                    onChange={onClose}
                                    variant={"underlined"}
                                />
                                <Button onPress={onOpenChange} isIconOnly={true} variant={"flat"} >
                                    <IconArrowBarToRight size={20}/>
                                </Button>
                            </DrawerHeader>
                            <DrawerBody>
                                <Wrapper/>
                            </DrawerBody>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </DrawerContext>
    );
};

export const useDrawerContext = () => {
    const context = useContext(DrawerContext);
    if (!context) {
        throw new Error("useDrawerContext must be used within a DrawerProvider");
    }
    return context;
};
