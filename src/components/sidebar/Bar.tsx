import {UserCard} from "@/components/ui/User";

export default function Bar(){
    return (
        <div className={`w-[340px] h-screen overflow-y-scroll scrollbar-hide p-2 transition-width duration-200 ease-in-out`}>
            <div className={"w-full h-full rounded-2xl bg-black border border-gray-600"}>
                <div className={"w-full h-fit py-3 px-2 flex items-center justify-between border-b border-gray-600"}>
                    <div className={"ml-2 flex items-center"}>
                        <UserCard role={"Emply"} name={"Bappa"} description={"Admin"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
