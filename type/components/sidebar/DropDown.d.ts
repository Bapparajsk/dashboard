import {AccordionProps} from "@heroui/accordion";
import {Icon} from "@tabler/icons-react";
import {ButtonDataType} from "&/components/ui/SidebarButton";

export interface DropDownProps {
    itemList: ItemListType[];
    selectionMode: AccordionProps["selectionMode"]
}

export interface ItemListType {
    key: string;
    title: {
        Icon: Icon;
        label: string;
    };
    ariaLabel: string;
    item: ButtonDataType[];
}
