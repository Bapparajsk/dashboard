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

export const EmployeeCardSkeleton = ({count = 1}: {count?: number}) => {

    const getSkeletons = () => {
        return (
            <div className={"w-full h-fit flex items-center justify-center mb-2 employee-card"}>
                <div
                    className={"user-card w-full h-full flex items-center justify-between px-3 py-3 border border-gray-600 rounded-lg cursor-pointer transition-all duration-300"}
                >
                    <Emp/>
                    <Skeleton className={"w-24 h-8 rounded-md"}/>
                </div>
            </div>
        )
    }

    return (
        <>
            {Array.from({ length: count }, (_, idx) => (
                <div key={idx} className={"w-full h-fit"}>
                    {getSkeletons()}
                </div>
            ))}
        </>
    );
}
