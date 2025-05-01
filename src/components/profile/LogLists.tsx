import {User, UserProps} from "@heroui/react";
import {dateFormat} from "@/lib/format";
import {Fragment, ReactNode} from "react";
import {useRouter} from "next/navigation";
import {Icon} from "@tabler/icons-react";

interface LogType {
    id: string;
    user: UserProps,
    description: {
        [key: string]: {
            value: string;
            href?: string;
            icon?: Icon;
        } | string;
    } | string;
    createdAt: Date;
}

const logs: LogType[] = [
    {
        id: "1",
        user: {
            avatarProps: {
                name: "Bappa Raj Sk",
                src: "https://www.powertrafic.fr/wp-content/uploads/2023/04/image-ia-exemple.png"
            },
            description: "Admin",
            name: "Bappa Raj Sk",
        },
        description: "update user profile",
        createdAt: new Date("2025-10-01T12:00:00Z")
    },
    {
        id: "2",
        user: {
            avatarProps: {
                name: "Sohel Rana",
                src: "https://www.powertrafic.fr/wp-content/uploads/2023/04/image-ia-exemple.png"
            },
            description: "Developer",
            name: "Sohel Rana",
        },
        description: "block post upload in 1 Day",
        createdAt: new Date("2023-10-01T12:00:00Z")
    },
    {
        id: "3",
        user: {
            avatarProps: {
                name: "Shakib Al Hasan",
                src: "https://www.powertrafic.fr/wp-content/uploads/2023/04/image-ia-exemple.png"
            },
            description: "User",
            name: "Shakib Al Hasan",
        },
        description: {
            "reason": "User not found",
            "status": "locked"
        },
        createdAt: new Date("2023-10-01T12:00:00Z")
    },
    {
        id: "4",
        user: {
            avatarProps: {
                name: "Sabbir Rahman",
                src: "https://www.powertrafic.fr/wp-content/uploads/2023/04/image-ia-exemple.png"
            },
            description: "User",
            name: "Sabbir Rahman",
        },
        description: {
            "reason": "post are not found",
            "status": "hidden post",
            "post id": {
                value: "123456789",
                href: "/post/123456789"
            },
        },
        createdAt: new Date("2023-10-01T12:00:00Z")
    },
    {
        id: "5",
        user: {
            avatarProps: {
                name: "Sabbir Rahman",
                src: "https://www.powertrafic.fr/wp-content/uploads/2023/04/image-ia-exemple.png"
            },
            description: "User",
            name: "Sabbir Rahman",
        },
        description: {
            "reason": "post are not found",
            "status": "hidden post",
            "post id": {
                value: "123456789",
                href: "/post/123456789"
            },
        },
        createdAt: new Date("2023-10-01T12:00:00Z")
    },
    {
        id: "6",
        user: {
            avatarProps: {
                name: "Sabbir Rahman",
                src: "https://www.powertrafic.fr/wp-content/uploads/2023/04/image-ia-exemple.png"
            },
            description: "User",
            name: "Sabbir Rahman",
        },
        description: {
            "reason": "post are not found",
            "status": "hidden post",
            "post id": {
                value: "123456789",
                href: "/post/123456789"
            },
        },
        createdAt: new Date("2023-10-01T12:00:00Z")
    }
];

export const LogLists = () => {
    return (
        <div className={"w-full h-full flex flex-col gap-2 overflow-y-auto pr-3"}>
            {logs.reverse().map((log) => (
                <LogCard key={log.id} {...log}/>
            ))}
            {logs.reverse().map((log) => (
                <LogCard key={log.id} {...log}/>
            ))}
            {logs.reverse().map((log) => (
                <LogCard key={log.id} {...log}/>
            ))}
            {logs.reverse().map((log) => (
                <LogCard key={log.id} {...log}/>
            ))}
        </div>
    );
};

function LogCard({ id, user, createdAt, description }: LogType) {

    const router = useRouter();

    const formatDescription = (description: LogType["description"]): ReactNode => {
        if (typeof description === "string") {
            return description;
        }

        if (Object.keys(description).length === 0) {
            return <span className={"text-gray-500"}>No description</span>;
        }

        const len = Object.keys(description).length;

        return (
            <div className={"flex gap-1"}>
                {Object.entries(description).map(([key, value], index) => (
                    <Fragment key={key}>
                        {typeof  value === "string" ? (
                            <div className={"flex gap-1 text-sm text-gray-400"}>
                                <span className={"font-semibold text-gray-400"}>{key}:</span>
                                <span className={"text-gray-500"}>{value}</span>
                            </div>
                        ) : (
                            <div className={"flex gap-1 text-sm text-gray-400"}>
                                <span className={"font-semibold text-gray-400"}>{key}:</span>
                                {value.href ? (
                                    <a href={value.href} className={"text-blue-500 hover:underline"}>
                                        {value.value}
                                    </a>
                                ) : (
                                    <span className={"text-gray-500"}>{value.value}</span>
                                )}
                            </div>
                        )}
                        {
                            index < len - 1 && (
                                <span className={"text-gray-500"}> | </span>
                            )
                        }
                    </Fragment>
                ))}
            </div>
        );
    };

    if (user.avatarProps) {
        user.avatarProps = {
            ...user.avatarProps,
            className: "cursor-pointer",
            onClick: () => {
                router.push(`/?selected-user=${id}`);
            }
        };
    }

    return (
        <div className={"w-full h-auto p-2 border border-gray-700 flex items-center justify-between rounded-md bg-neutral-800/60 hover:bg-neutral-800/80"}>
            <div className={"flex gap-2"}>
                <User
                    className={"font-semibold"}
                    {...user}
                />:
                <div className={"w-fit "}>
                    <div className={"flex h-full  text-sm text-gray-400"}>
                        { formatDescription(description) }
                    </div>
                </div>
            </div>
            <div className={"flex items-center gap-2"}>
                <p className={"text-sm text-gray-400"}>
                    {dateFormat(createdAt)}
                </p>
            </div>
        </div>
    );
}
