import {Input, Spinner, Tabs, Tab, cn} from "@heroui/react";
import {IconSearch} from "@tabler/icons-react";
import {FilterProps} from "&/components/ui/Filter";

export const Filter = ({ InputProps, TabsProps, className, filterComponent, }: FilterProps) => {
    return (
        <div className={cn("w-full h-fit sticky top-0 bg-black z-30 pt-2", className)}>
            <div className={"w-full h-full px-3 flex justify-between items-center gap-2"}>
                <div className={"w-full"}>
                    <Input
                        variant={"bordered"}
                        placeholder={"Search..."}
                        startContent={<IconSearch size={20} className={"text-gray-400"}/>}
                        endContent={<Spinner size={"sm"} color={"current"} variant={"dots"}/>}
                        {...InputProps}
                    />
                </div>
                {TabsProps && <Tabs
                    size={TabsProps?.size || "sm"}
                    defaultSelectedKey={TabsProps?.defaultSelectedKey}
                    aria-label={"Tabs colors"}
                    radius={"md"}
                    variant={"bordered"}
                    className={"font-semibold"}
                    onSelectionChange={TabsProps?.onSelectionChange}
                >
                    {TabsProps?.tabs.map(tab => (
                        <Tab key={tab.key} title={
                            <div className={"flex gap-1 items-center"}>
                                <tab.Icon size={22}/>
                                <span>{tab.title}</span>
                            </div>
                        }/>
                    ))}
                </Tabs>}
                {filterComponent}
            </div>

            <div className={"w-full h-[1px] bg-gray-600 mt-2"}/>
        </div>
    );
};
