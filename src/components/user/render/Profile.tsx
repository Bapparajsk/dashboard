"use client";

import Image from "next/image";
import {Button} from "@heroui/button";
import {
    IconCloudOff,
    IconCreditCardOff,
    IconLock,
    IconMailShare,
    IconUserOff
} from "@tabler/icons-react";
import {NumberTicker} from "@/components/ui/NumberTicker";
import { UserActionButtonProps} from "&/components/user/renderUser";
import {cn, Skeleton} from "@heroui/react";
import {useUserContext} from "@/context/userContext";

export const Profile = () => {

    const { user, loading_user } = useUserContext();

    return (
        <div className={"w-full h-full flex flex-col"}>
            <div className={"w-full h-fit"}>
                <div className={"w-full h-40"}>
                    {/*<Image*/}
                    {/*    width={"1000"}*/}
                    {/*    height={"1000"}*/}
                    {/*    alt="HeroUI hero Image"*/}
                    {/*    src={"/user/default-backgound.png"}*/}
                    {/*    className={"w-full h-full object-cover"}*/}
                    {/*/>*/}
                    <div className={"w-full h-full bg-gray-600"}/>
                </div>
                <div className={"w-full h-20 relative"}>
                    <div className={"absolute -top-12 left-4 w-32 h-32 "}>
                        <div className={cn("w-full h-full overflow-hidden rounded-full border-5 border-black", user?.online && "border-primary-500", loading_user && "border-black")}>
                            {loading_user ? <Skeleton className={"w-full h-full"}/> : <Image
                                width={"1000"}
                                height={"1000"}
                                alt="HeroUI hero Image"
                                src={"/user/default-profile.jpg"}
                                className={"w-full h-full object-cover"}
                            />}
                        </div>
                    </div>
                </div>
            </div>
            <div className={"w-full h-fit pl-5 pb-3 mt-3 border-b border-gray-600 flex justify-between"}>
                {loading_user ?
                    (<div className={"flex flex-col gap-3"}>
                        <Skeleton className={"w-32 h-7"}/>
                        <Skeleton className={"w-52 h-4"}/>
                    </div>) : (<div>
                        <div className={"text-2xl font-semibold"}>
                            {user?.name} <span
                            className={`text-xl font-bold ${!user?.isEmailVerified && "text-danger-500"}`}>{!user?.isEmailVerified && ": Not Verified"}</span>
                        </div>
                        <div className={" font-semibold text-gray-500"}>
                            {user?.description}
                        </div>
                    </div>)
                }
                <div className={"flex gap-2 mr-4 items-center justify-center"}>
                    {loading_user ? <>
                            <Skeleton className={"size-8 rounded-md"}/>
                            <Skeleton className={"size-8 rounded-md"}/>
                        </> : <>
                            <Button isIconOnly={true} size={"sm"} variant={"bordered"} color={"primary"}>
                                <IconMailShare size={20}/>
                            </Button>
                            <Button isIconOnly={true} size={"sm"} variant={"bordered"} color={"danger"}>
                                <IconLock size={20}/>
                            </Button>
                        </>
                    }
                </div>
            </div>
            <div className={"w-full flex px-3 border-b border-gray-600"}>
                <div className={"w-1/2 border-r border-gray-600 py-2"}>
                    <div className={"text-center"}>
                        <div className={"text-xl font-semibold text-gray-500"}>Post Reading</div>
                        <div className={"text-2xl flex justify-center items-center text-primary-500"}>
                            {loading_user ? <NumberSkeleton/> : <NumberTicker value={3}/>}
                        </div>

                    </div>
                </div>
                <div className={"w-1/2 py-2 border-r border-gray-600"}>
                    <div className={"text-center"}>
                        <div className={"text-xl font-semibold text-gray-500"}>Friends</div>
                        <div className={"text-2xl flex justify-center"}>
                            {loading_user ? <NumberSkeleton /> : <>+<NumberTicker value={user?.postCount || 0}/></>}
                        </div>
                    </div>
                </div>
                <div className={"w-1/2 py-2"}>
                    <div className={"text-center"}>
                        <div className={"text-xl font-semibold text-gray-500"}>Posts</div>
                        <div className={"text-2xl flex justify-center"}>
                            {loading_user ? <NumberSkeleton /> : <>+<NumberTicker value={user?.friendCount || 0}/></>}
                        </div>
                    </div>
                </div>
            </div>
            <div className={"w-full h-full px-2 py-2 flex flex-col gap-2"}>
                {loading_user ? <ButtonSkeleton/> : <>
                    <UserActionButton label={"Block Upload Post"} Icon={IconCreditCardOff} border={"warning"}/>
                    <UserActionButton label={"Block"} Icon={IconUserOff} border={"danger"}/>
                    <UserActionButton label={"Block API"} Icon={IconCloudOff} border={"danger"}/>
                </>}
            </div>
        </div>
    );
};

function NumberSkeleton() {
    return (
        <div className={"h-8 flex items-center"}> <Skeleton className={"w-4 h-6 py-2"}/> </div>
    );
}

function ButtonSkeleton() {
    return (
        <div className={"flex flex-col gap-2"}>
            <Skeleton className={"w-full h-10 rounded-md"}/>
            <Skeleton className={"w-full h-10 rounded-md"}/>
            <Skeleton className={"w-full h-10 rounded-md"}/>
        </div>
    );
}

function UserActionButton({ Icon, label, border = "default" }: UserActionButtonProps) {

    const colors = {
        default: "hover:border-gray-500 hover:text-gray-300",
        danger: "hover:border-danger-500 hover:text-danger-500",
        warning: "hover:border-warning-500 hover:text-warning-500",
    };

    return (
        <div className={cn(
            "w-full h-fit py-2 px-3 flex justify-start items-center gap-2 text-gray-400 bg-gray-900  rounded-md cursor-pointer border border-gray-800 hover:text-gray-200 transition-[border] duration-300 group",
            colors[border]
        )}>
            <Icon size={20} className={"group-hover:scale-125 transition-all duration-300"}/>
            <div className={"font-semibold group-hover:translate-x-2 transition-all duration-300"}>{label}</div>
        </div>
    );
}
