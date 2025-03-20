import {Input, Spinner, Tabs, Tab} from "@heroui/react";
import {IconMail, IconSearch, IconUsers} from "@tabler/icons-react";
import {useListTab} from "@/hooks/List";


export const Filter = () => {

    const { list, setListName } = useListTab();

    return (
        <div className={"w-full h-fit sticky top-0 bg-black z-30 pt-2"}>
            <div className={"w-full h-full px-3 flex justify-between items-center gap-2"}>
                <div className={"w-full"}>
                    <Input
                        startContent={<IconSearch size={20} className={"text-gray-400"}/>}
                        variant={"bordered"}
                        placeholder={"Search users"}
                        endContent={<Spinner size={"sm"} color={"current"} variant={"dots"}/>}
                    />
                </div>
                <Tabs defaultSelectedKey={list} aria-label="Tabs colors" radius="md" variant={"bordered"} className={"font-semibold"} onSelectionChange={e => {
                    setListName(e as "users" | "emails");
                }}>
                    <Tab key="users" title={
                        <div className={"flex gap-1 items-center"}>
                            <IconUsers size={22}/>
                            <span>Users</span>
                        </div>
                    } />
                    <Tab key="emails" title={
                        <div className={"flex gap-1 items-center"}>
                            <IconMail size={22}/>
                            <span>Emails</span>
                        </div>
                    } />
                </Tabs>
            </div>
            <div className={"w-full h-[1px] bg-gray-600 mt-2"}/>
        </div>
    );
};
