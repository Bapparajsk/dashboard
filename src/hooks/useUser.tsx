"use client";

import {useEffect, useState} from "react";

interface UserType {
    id: number
    name: string;
    description: string;
    isEmailVerified: boolean;
    online: boolean;
    friendCount: number;
    postCount: number;
}

function generateTempUsers(count = 15) {
    const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Isaac", "Jack", "Karen", "Leo", "Mia", "Noah", "Olivia", "Paul", "Quinn", "Ryan", "Sophia", "Tom"];
    const descriptions = [
        "Coder", "JavaScript fan", "Techie", "Full-stack dev", "Debugging pro", "AI/ML enthusiast",
        "React expert", "Node.js guru", "Backend lover", "Cloud nerd", "App developer", "Security buff",
        "UI/UX thinker", "Bug hunter", "Gamer coder"
    ];

    return Array.from({ length: count }, (_, idx) => {
        const id = idx + 1;
        const name = names[idx % names.length];
        const description = descriptions[idx % descriptions.length];
        const isEmailVerified = idx % 2 === 0;
        const online = Math.random() < 0.5;
        const friendCount = Math.floor(Math.random() * 500); // Random number of friends (0-499)
        const postCount = Math.floor(Math.random() * 100); // Random number of posts (0-99)

        return { id, name, description, isEmailVerified, online, friendCount, postCount };
    });
}


export const tempUsers = generateTempUsers();

export const useUser = () => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState<UserType[]>([]);

    useEffect(() => {
        setTimeout(() => {
            setUsers(tempUsers);
            console.log("add users");
            setLoading(false);
        }, 1000);
    }, []);

    return { users, loading };
};
