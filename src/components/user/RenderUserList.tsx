"use client";

import React, {MouseEvent, useEffect} from "react";
import {UserCardSkeleton} from "@/components/skeletons/UserCard";
import {UserCard} from "@/components/user/UserCard";
import {useIntersection} from "@mantine/hooks";
import {useInfiniteQuery} from "@tanstack/react-query";
import {useUserList} from "@/context/userListContext";
import {Filter} from "@/components/ui/Filter";
import {IconMail, IconUserPlus, IconUsers} from "@tabler/icons-react";
import {parentClickHandler} from "@/lib/clickHandler";
import {Button} from "@heroui/button";

export const RenderUserList = () => {

    const { fetchUsers, setListTabKeyName, listTabKey, setSelectedUserId, selectedUserId } = useUserList();

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
            <Filter
                InputProps={{ placeholder: "Search Users..." }}
                TabsProps={{
                    defaultSelectedKey: listTabKey,
                    onSelectionChange: setListTabKeyName,
                    size: "md",
                    tabs: [
                        { key: "user", title: "Users", Icon: IconUsers },
                        { key: "email", title: "Email", Icon: IconMail },
                    ]
                }}
                createNewButton={{
                    icon: { size: 20 },
                    buttonProps: {
                        size: "md",
                        onPress: () => {
                            console.log("Create new user");
                        }
                    }
                }}
            />
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
