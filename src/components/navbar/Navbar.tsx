import {NavButtons} from "@/components/navbar/NavButtons";

export const Navbar = () => {

    return (
        <div className={"w-full h-full p-3 border-b border-gray-600 "}>
            <div className={"w-full h-full flex justify-end items-center"}>
                <NavButtons showLogout={true}/>
            </div>
        </div>
    );
};
