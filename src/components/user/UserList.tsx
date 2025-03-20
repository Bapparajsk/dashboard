"use client";
import {UserCard} from "@/components/user/UserCard";
import {useState, MouseEvent, useEffect} from "react";
import {RenderUser} from "@/components/user/RenderUser";
import {Filter} from "@/components/user/Filter";

function generateTempUsers(count = 15) {
    const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Isaac", "Jack", "Karen", "Leo", "Mia", "Noah", "Olivia", "Paul", "Quinn", "Ryan", "Sophia", "Tom"];
    const descriptions = [
        "Coder", "JavaScript fan", "Techie", "Full-stack dev", "Debugging pro", "AI/ML enthusiast",
        "React expert", "Node.js guru", "Backend lover", "Cloud nerd", "App developer", "Security buff",
        "UI/UX thinker", "Bug hunter", "Gamer coder"
    ];

    return Array.from({ length: count }, () => ({
        name: names[Math.floor(Math.random() * names.length)],
        description: descriptions[Math.floor(Math.random() * descriptions.length)],
        isEmailVerified: Math.random() < 0.5
    }));
}

interface UserType {
    name: string;
    description: string;
    isEmailVerified: boolean;
}

export const UserList = () => {

    const [users, setUsers] = useState<UserType[]>(generateTempUsers());
    const [user, setUser] = useState<UserType | undefined>(undefined);

    const userClickHandler = (e: MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        if (!target.classList.contains("user-card")) return;

        const idx = parseInt(target.accessKey);
        setUser(users[idx]);
    };

    useEffect(() => {
        console.log(user);
    },[user]);

    return (
        <div className={"w-full flex"} style={{ height: "calc(100vh - 14.8rem)" }}>
            <div className={"w-2/3 h-full"}>
                <div className={"relative w-full h-full overflow-y-scroll scrollbar-hide"} onClick={userClickHandler}>
                    <Filter/>
                    <div className={"px-3 pt-2"}>
                        {users.map((user, idx) => (
                            <UserCard key={idx} {...user} idx={idx}/>
                        ))}
                    </div>
                </div>
            </div>
            <div className={"w-1/3 h-full border-l border-gray-600 px-3 py-2"}>
                <div className={"w-full h-full border border-gray-600 rounded-xl overflow-hidden"}>
                    <RenderUser user={user}/>
                </div>
            </div>
        </div>
    );
};
