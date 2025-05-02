import {NavTabs} from "@/components/navbar/Tabs";
import {NavButtons} from "@/components/navbar/NavButtons";

export const Navbar = () => {

    return (
        <div className={"w-full h-fit p-3 border-b border-gray-600 "}>
            <div className={"w-full h-full flex justify-between items-center"}>
                <NavTabs/>
                <NavButtons showLogout={true}/>
            </div>
        </div>
    );
};
