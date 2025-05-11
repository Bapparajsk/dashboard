"use client";
import {NavButtons} from "@/components/navbar/NavButtons";
import {usePathname} from "next/navigation";

const paths = [
    "/profile"
];

export const Navbar = () => {

    const path = usePathname();
    if(paths.includes(path)) {
        return null;
    }

    return (
        <div className={"w-full h-[7%] p-3 border-b border-gray-600 "}>
            <div className={"w-full h-full flex justify-end items-center"}>
                <NavButtons showLogout={true}/>
            </div>
        </div>
    );
};
