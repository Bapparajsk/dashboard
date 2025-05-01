"use client";

import {Input, Spinner, Tabs, Tab, cn} from "@heroui/react";
import {IconSearch, IconUserPlus} from "@tabler/icons-react";
import {FilterProps} from "&/components/ui/Filter";
import {Button} from "@heroui/button";
import React from "react";

export const Filter = ({ InputProps, TabsProps, className, filterComponent, createNewButton}: FilterProps) => {

    const NewButtonIcon = createNewButton?.icon?.Icon || IconUserPlus;

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
                {createNewButton && (
                    <Button variant={"shadow"} color={"success"} {...createNewButton.buttonProps}>
                        <div className={"flex gap-1 items-center"}>
                            <NewButtonIcon size={createNewButton.icon?.size || 18} className={createNewButton.icon?.className}/>
                            <span className={"font-semibold"}>{createNewButton.buttonProps?.title || "New"}</span>
                        </div>
                    </Button>
                )}
                {filterComponent}
            </div>
            <div className={"w-full h-[1px] bg-gray-600 mt-2"}/>
        </div>
    );
};
