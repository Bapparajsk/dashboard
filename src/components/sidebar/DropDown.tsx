import {Accordion, AccordionItem} from "@heroui/accordion";
import {DropDownProps, ItemListType} from "&/components/sidebar/DropDown";

export const DropDown = ({ itemList, selectionMode }: DropDownProps) => {
    return (
        <Accordion selectionMode={selectionMode} isCompact>
            {itemList.map(({key, children, title, ariaLabel}: ItemListType) => (
                <AccordionItem key={key} aria-label={ariaLabel} title={
                    <div className={"flex items-center gap-2"}>
                        <title.Icon size={22}/>
                        <span>{title.label}</span>
                    </div>
                }>
                    <div className={"flex flex-col gap-2"}>
                        {children}
                    </div>
                </AccordionItem>
            ))}
        </Accordion>
    );
};
