"use client";

import {createContext, Key, ReactNode, useContext, useEffect, useState} from "react";
import {UserListContextType, UserType} from "&/context/userListContext";
import {parseAsInteger, useQueryState} from "nuqs";

function generateTempUsers(count = 60) {
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

const UserListContext = createContext<UserListContextType | undefined>(undefined);

export const UserListProvider = ({ children }: {children: ReactNode}) => {
    const [listTabKey, setListTabKey] = useQueryState("list-tab", { defaultValue: "" });
    const [selectedUserId, setSelectedUser] = useQueryState("selected-user", parseAsInteger.withDefault(0));
    const [user, setUser] = useState<UserType | null>(null);
    const [loading_user, setLoadingUser] = useState(true);

    useEffect(() => {
        if(selectedUserId) {
            fetchUserById(selectedUserId).catch(console.log);
        }
    }, [selectedUserId]);

    const setListTabKeyName = (name: Key) => {
        if (typeof name !== "string") return;
        setListTabKey(name).catch(console.log);
    };

    const setSelectedUserId = (id: number) => {
        setSelectedUser(id).catch(console.log);
    };

    const fetchUsers = async ({page = 1} : {page?: number}): Promise<{ users: UserType[]; nextPage: number | null }> => {
        // Simulate an API call
        return new Promise((resolve) => {
            setTimeout(() => {
                const user = tempUsers.slice((page - 1) * 5, page * 5);
                const hashNext = page * 5 < tempUsers.length ? page + 1 : null;

                resolve({
                    users: user,
                    nextPage: hashNext
                });
            }, 1000);
        });
    };

    const fetchUserById = async (id?: number | undefined): Promise<UserType | null> => {
        // Simulate an API call
        setLoadingUser(true);
        return new Promise((resolve) => {
            setTimeout(() => {
                if (!id) {
                    resolve(null);
                }
                const u = tempUsers.find(user => user.id === id) || null;
                setUser(u);
                setLoadingUser(false);
                resolve(u);
            }, 1000);
        });
    };

    return (
        <UserListContext.Provider value={{
            user,
            loading_user,
            fetchUsers,
            listTabKey,
            setListTabKeyName,
            fetchUserById,
            selectedUserId,
            setSelectedUserId,
        }}>
            {children}
        </UserListContext.Provider>
    );
};

export const useUserList = () => {
    const context = useContext(UserListContext);
    if (!context) {
        throw new Error("useUserList must be used within a UserListProvider");
    }
    return context;
};
