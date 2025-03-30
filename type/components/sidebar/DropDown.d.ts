import React from "react";
import {AccordionProps} from "@heroui/accordion";
import {Icon} from "@tabler/icons-react";

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
    children: React.ReactNode;
}
