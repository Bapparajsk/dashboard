import { Skeleton } from "@heroui/skeleton";
import {Emp} from "@/components/skeletons/Emp";

export const UserCardSkeleton = ({count = 1} :{ count?: number}) => {
    return (
        <>
            {Array.from({ length: count }, (_, idx) => (
                <Ske key={idx}/>
            ))}
        </>
    );
};

function Ske() {
    return (
        <div className={"w-full h-fit flex items-center justify-between border border-gray-600 rounded-md py-2 px-3 mb-2"}>
            <div className={"flex gap-3"}>
                <Emp/>
            </div>
            <div>
                <Skeleton className={"w-11 h-9 rounded-md"}/>
            </div>
        </div>
    );
}
