"use client";
import React, {Key, useEffect, useState} from "react";
import {EmployeeCard} from "./EmployeeCard";
import {parentClickHandler} from "@/lib/clickHandler";
import {IDTrackerType} from "&/components/employee/EmployeeList";
import {useInfiniteQuery} from "@tanstack/react-query";
import {useIntersection} from "@mantine/hooks";
import {Filter} from "@/components/ui/Filter";
import {EmployeeCardSkeleton} from "@/components/skeletons/Emp";
import {useEmpContext} from "@/context/empContext";


const idTracker: IDTrackerType = {
    targetClosest: ".employee-card",
    attributeName: "data-id"
};

export const EmployeeList = () => {
    const { fetchEmployees, selectedEmployeeId, selectEmployeeId } = useEmpContext();

    const {
        data,
        fetchNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: ["employees"],
        queryFn: async ({ pageParam = 1 }) => {
            return await fetchEmployees({page: pageParam});
        },
        getNextPageParam: (lastPage) => lastPage?.nextPage,
        initialPageParam: 1,
        retry: 1,
        gcTime: 1000 * 60,
    });

    const { ref, entry } = useIntersection({
        root: null,
        threshold: 0.5
    });

    useEffect(() => {
        if (entry?.isIntersecting && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [entry, isFetchingNextPage, fetchNextPage]);

    const employees = data?.pages.flatMap((page) => page.employees) || [];

    // Apply filter

    const employeeClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        const id = parentClickHandler({ e, ...idTracker });

        if (!id) return;
        selectEmployeeId(Number(id));
    };

    return (
        <div className={"w-full h-full pt-2"}>
            <div className={"h-full overflow-x-hidden overflow-y-auto scrollbar-hide"} onClick={employeeClickHandler}>
                {
                    employees.length > 0 ? (
                        <div className={"grid grid-cols-1 px-3"}>
                            {employees.map((employee, idx) => (
                                <EmployeeCard
                                    key={idx}
                                    {...employee}
                                    targetClosest={idTracker.targetClosest}
                                    isSelected={selectedEmployeeId === employee.id}
                                    logCount={98}
                                />
                            ))}
                            <div ref={ref} className={"h-fit w-full flex items-center justify-center"}>
                                {isFetchingNextPage && <EmployeeCardSkeleton/>}
                            </div>
                        </div>
                    ) : (
                        <div className={"w-full h-full flex items-center justify-center"}>
                            <p className={"text-gray-500"}>No Employees Found</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};
