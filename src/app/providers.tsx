"use client";

import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {useEmp} from "@/hooks/useEmp";
import {useUser} from "@/hooks/useUser";
import {UserProvider} from "@/context/userContext";

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
    useEmp();
    useUser();

    return (
        <HeroUIProvider navigate={router.push}>
            <QueryClientProvider client={queryClient}>
                <UserProvider>
                    {children}
                </UserProvider>
            </QueryClientProvider>
        </HeroUIProvider>
    );
}
