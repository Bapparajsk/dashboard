import {Input, Spinner} from "@heroui/react";
import {IconSearch} from "@tabler/icons-react";

export const Filter = () => {
    return (
        <div className={"w-full h-fit sticky top-0 bg-black z-30 pt-2"}>
            <div className={"w-full h-full px-3 flex justify-between items-center"}>
                <div className={"w-full"}>
                    <Input
                        startContent={<IconSearch size={20} className={"text-gray-400"}/>}
                        variant={"bordered"}
                        placeholder={"Search users"}
                        endContent={<Spinner size={"sm"} color={"current"} variant={"dots"}/>}
                    />
                </div>
            </div>
            <div className={"w-full h-[1px] bg-gray-600 mt-2"}/>
        </div>
    );
};
