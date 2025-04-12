import {useState, useMemo} from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@heroui/react";
import {IconArrowRight} from "@tabler/icons-react";
import {Key} from "@react-types/shared";

export const DropdownComponent = () => {
    const [selectedKeys, setSelectedKeys] = useState<"all" | Set<Key>>(new Set(["text"]));
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const selectedValue = useMemo(
        () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
        [selectedKeys],
    );

    return (
        <Dropdown onOpenChange={setIsOpen}>
            <DropdownTrigger>
                <Button className="capitalize" variant="ghost" color={"warning"} size={"sm"}>
                    <div className={"flex items-center gap-2 px-2 font-semibold"}>
                        {selectedValue}
                        <IconArrowRight size={18} className={`${isOpen && "rotate-90"} transition-all duration-300`}/>
                    </div>
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                disallowEmptySelection
                aria-label="Single selection example"
                selectedKeys={selectedKeys}
                selectionMode="single"
                variant={"bordered"}
                onSelectionChange={setSelectedKeys}
            >
                <DropdownItem key="text">Text</DropdownItem>
                <DropdownItem key="number">Number</DropdownItem>
                <DropdownItem key="date">Date</DropdownItem>
                <DropdownItem key="single_date">Single Date</DropdownItem>
                <DropdownItem key="failed">Failed</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};
