"use client";

import React, {MouseEvent, useEffect} from "react";
import {UserCardSkeleton} from "@/components/skeletons/UserCard";
import {UserCard} from "@/components/user/UserCard";
import {useIntersection} from "@mantine/hooks";
import {useInfiniteQuery} from "@tanstack/react-query";
import {useUserList} from "@/context/userListContext";
import {parentClickHandler} from "@/lib/clickHandler";

export const RenderUserList = () => {

    const { fetchUsers, setSelectedUserId, selectedUserId } = useUserList();

    const {
        data,
        fetchNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: ["users"],
        queryFn: async ({ pageParam = 1 }) => {
            console.log("Fetching page", pageParam);
            return await fetchUsers({page: pageParam});
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

    const userClickHandler = (e: MouseEvent<HTMLDivElement>) => {

        const id = parentClickHandler({
            e,
            targetClosest: ".user-card",
            attributeName: "data-id"
        });

        if (!id) return;

        const idNum = parseInt(id);
        if (selectedUserId === idNum) return; // Prevent re-fetching the same user
        setSelectedUserId(idNum);

    };

    const users = data?.pages.flatMap((page) => page.users) || [];

    return (
        <div className={"relative w-full h-full overflow-y-scroll scrollbar-hide"} onClick={userClickHandler}>

            {
                users.length > 0 ? (
                    <div className={"grid grid-cols-1 px-3 pt-2"}>
                        {users.map((user, idx) => (
                            <UserCard
                                key={idx}
                                {...user}
                                isSelected={selectedUserId === user.id}
                            />
                        ))}
                        <div ref={ref} className={"h-fit w-full flex items-center justify-center"}>
                            {isFetchingNextPage && <UserCardSkeleton/>}
                        </div>
                    </div>
                ) : (
                    <div className={"w-full h-full flex items-center justify-center"}>
                        <p className={"text-gray-500"}>No Users Found</p>
                    </div>
                )
            }
        </div>
    );
};
