"use client";

import { useRouter } from "next/navigation";

export const useNavigation = () => {
    const router = useRouter();

    const pushNavigation = (path: string) => router.push(path);

    return { pushNavigation };
};
