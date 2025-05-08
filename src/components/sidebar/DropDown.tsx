import {Accordion, AccordionItem} from "@heroui/accordion";
import {DropDownProps, ItemListType} from "&/components/sidebar/DropDown";
import {SidebarButton} from "@/components/ui/SidebarButton";

export const DropDown = ({ itemList, selectionMode }: DropDownProps) => {
    return (
        <Accordion selectionMode={selectionMode} isCompact>
            {itemList.map(({key, item, title, ariaLabel}: ItemListType) => (
                <AccordionItem key={key} aria-label={ariaLabel} title={
                    <div className={"flex items-center gap-2"}>
                        <title.Icon size={22}/>
                        <span>{title.label}</span>
                    </div>
                }>
                    <div className={"flex flex-col gap-2"}>
                        {item.map((buttonDatum, index) => (
                            <SidebarButton key={index} {...buttonDatum}/>
                        ))}
                    </div>
                </AccordionItem>
            ))}
        </Accordion>
    );
};
