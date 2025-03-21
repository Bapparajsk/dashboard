import { Skeleton } from "@heroui/skeleton";

export const Emp = () => {
    return (
        <div className={"flex gap-2"}>
            <Skeleton className={"size-10 rounded-full"}/>
            <div className={"flex flex-col gap-1 justify-center"}>
                <Skeleton className={"w-24 h-4"}/>
                <Skeleton className={"w-32 h-3"}/>
            </div>
        </div>
    );
};
