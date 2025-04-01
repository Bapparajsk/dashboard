import {Tab, Tabs} from "@heroui/react";
import {CardTabProps} from "&/components/ui/CardTab";

export const CardTab = ({ defaultSelectedKey, onSelectionChange, isDisabled, ariaLabel, tabs }: CardTabProps) => {
    return (
        <Tabs
            defaultSelectedKey={defaultSelectedKey}
            isDisabled={!isDisabled}
            onSelectionChange={onSelectionChange}
            aria-label={ariaLabel ?? "Card Tabs"}
            size={"sm"}
            variant={"underlined"}
        >
            {tabs.map(tab => (
                <Tab key={tab.key} title={
                    <div className={"flex gap-2 items-center"}>
                        <tab.Icon size={20}/>
                        <span>{tab.title}</span>
                    </div>
                }/>
            ))}
        </Tabs>
    );
};
