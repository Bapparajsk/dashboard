

import {UserCardSkeleton} from "@/components/skeletons/UserCard";
import {UserCard} from "@/components/user/UserCard";
import {useIntersection} from "@mantine/hooks";
import {useInfiniteQuery} from "@tanstack/react-query";
import {useUserList} from "@/context/userListContext";
import React, {MouseEvent, useEffect} from "react";
import {Filter} from "@/components/ui/Filter";
import {IconMail, IconUsers} from "@tabler/icons-react";
import {useUserTab} from "@/hooks/List";

export const RenderUserList = () => {

    const { fetchUsers, setListTabKeyName, listTabKey, setSelectedUserId } = useUserList();
    const { setUserTabName } = useUserTab();

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
        const target = e.target as HTMLElement;
        const mailIcon = target.closest(".user-card-mail-icon"); // Check if mail icon is clicked
        const employeeCard = target.closest(".user-card"); // Check if card is clicked

        if (mailIcon) {
            const id = mailIcon.getAttribute("data-id");
            if (id) {
                setSelectedUserId(parseInt(id));
                setUserTabName("sendEmail");
            }
        } else if (employeeCard) {
            const id = employeeCard.getAttribute("data-id");
            if (id) setSelectedUserId(parseInt(id));
        }
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
            />
            {
                users.length > 0 ? (
                    <div className={"grid grid-cols-1 px-2 pt-2"}>
                        {users.map((user, idx) => (
                            <UserCard
                                key={idx}
                                {...user}

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
