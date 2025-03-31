"use client";
import React, {Key, useEffect, useState} from "react";
import {EmployeeCard} from "./EmployeeCard";
import {parentClickHandler} from "@/lib/clickHandler";
import {IDTrackerType} from "&/components/employee/EmployeeList";
import {useInfiniteQuery} from "@tanstack/react-query";
import {Filter} from "@/components/ui/Filter";
import {EmployeeCardSkeleton} from "@/components/skeletons/Emp";
import {useEmpContext} from "@/context/empContext";
import {useIntersection} from "@mantine/hooks";

const idTracker: IDTrackerType = {
    targetClosest: ".employee-card",
    attributeName: "data-id"
};

export const EmployeeList = () => {
    const [filter, setFilter] = useState<Key>("all"); // Store selected filter
    const { fetchEmployees } = useEmpContext();

    const employeeClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        const id = parentClickHandler({
            e,
            ...idTracker
        });

        if (!id) return;
    };

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
    const filteredEmployees = employees.filter((employee) => {
        if (filter === "all") return true;
        if (filter === "online") return employee.isOnline; // Assuming `isOnline` is a boolean property
        return false;
    });


    return (
        <div className={"w-full h-full pt-2 pl-2"}>
            <div className={"h-full overflow-x-hidden overflow-y-auto scrollbar-hide"} onClick={employeeClickHandler}>
                <Filter
                    className={"mb-2"}
                    InputProps={{
                        placeholder: "Search Employees...",
                        onChange: (value) => console.log(value),
                        onSubmit: (value) => console.log(value)
                    }}
                    TabsProps={{
                        defaultSelectedKey: "all",
                        onSelectionChange: (key: Key) => {
                            console.log(key);
                            setFilter(key);
                        },
                        tabs: [
                            { key: "all", title: "All", Icon: () => <div/> },
                            { key: "online", title: "Online", Icon: () => <div/> },
                        ]
                    }}
                />
                {
                    filteredEmployees.length > 0 ? (
                        <div className={"grid grid-cols-1"}>
                            {filteredEmployees.map((employee, idx) => (
                                <EmployeeCard
                                    key={idx}
                                    {...employee}
                                    // className={"employee-card"}
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
