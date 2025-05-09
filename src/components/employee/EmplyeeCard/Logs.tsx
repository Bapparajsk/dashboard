import {Filter} from "@/components/ui/Filter";
import {DropdownComponent} from "@/components/ui/Dropdown";
import {UserCard} from "@/components/ui/User";

export const Logs = () => {
    return (
        <div className={"w-full h-full py-2 flex flex-col"}>
            <Filter
                InputProps={{
                    placeholder: "Search logs...",
                    size: "sm",
                    onValueChange: (value) => console.log(value),
                    onSubmit: (value) => console.log(value)
                }}
                filterComponent={<DropdownComponent/>}
            />
            <div className={"w-full h-full space-y-2 px-2 pt-2 overflow-y-scroll scrollbar-hide"}>
                {Array.from({ length: 26}, (_, index) => (
                    <LogListItem key={index} idx={index}/>
                ))}

            </div>
        </div>
    );
};

function LogListItem({idx} : {idx: number}) {
    return (
        <div className={"relative w-full h-fit overflow-hidden z-0 flex items-center justify-between px-3 py-3 border border-gray-600 rounded-lg cursor-pointer transition-all duration-300 hover:border-primary-500 group"}>
            <UserCard
                name={<div>
                    <p className={"text-gray-500"}>
                        Send Mail : {" "}
                        <span className={"font-bold text-gray-300"}>
                            Bappa
                        </span> {" "}
                    </p>
                </div>}
                role={"user"}
                description={`Description for log ${idx}`}
                avatarProps={{
                    alt: "Log Avatar",
                    size: "sm",
                    src: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
                }}
            />
            <div className={"relative flex items-center justify-center "}>
                <span className={"text-blue-500"}>Details</span>
                <span className={"absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"}/>
            </div>
            <div className={"absolute left-0 top-0 w-0 h-full bg-blue-500/20 -z-20 transition-all duration-400 group-hover:w-full"}/>
        </div>
    );
}
