"use client";

import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {EmpProvider} from "@/context/empContext";
import {UserListProvider} from "@/context/userListContext";


declare module "@react-types/shared" {
    interface RouterConfig {
        routerOptions: NonNullable<
            Parameters<ReturnType<typeof useRouter>["push"]>[1]
        >;
    }
}

export function Providers({ children } :{ children: React.ReactNode }) {
    const router = useRouter();
    const [queryClient,] = React.useState(new QueryClient());

    return (
        <HeroUIProvider navigate={router.push}>
            <QueryClientProvider client={queryClient}>
                <EmpProvider>
                    <UserListProvider>
                        {children}
                    </UserListProvider>
                </EmpProvider>
            </QueryClientProvider>
        </HeroUIProvider>
    );
}
