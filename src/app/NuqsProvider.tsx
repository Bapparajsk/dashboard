"use client";

import { Suspense } from "react";
import {NuqsAdapter} from "nuqs/adapters/next/app";

export const NuqsProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <NuqsAdapter>
            <Suspense fallback={"Loading..."}>
                {children}
            </Suspense>
        </NuqsAdapter>
    );
};
