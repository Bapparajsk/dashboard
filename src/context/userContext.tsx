"use client";

import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {UserContextType} from "&/context/userContext";
import {UserType} from "&/components/user/renderUser";
import {useSelectedUser} from "@/hooks/List";
import {tempUsers} from "@/hooks/useUser";

const UserContext = createContext<UserContextType>({
    user: null,
    loading_user: true
});

export const UserProvider = ({children} : {children: ReactNode}) => {

    const [user, setUser] = useState<UserType | null>(null);
    const [loading_user, setLoadingUser] = useState(true);
    const { selectedUserId } = useSelectedUser();

    const fetchUserById = (id: string) => {
        setLoadingUser(true);
        setTimeout(() => {
            const user = tempUsers.find(user => user.id.toString() === id);
            setUser(user || null);
            setLoadingUser(false);
        }, 1000);
    };

    useEffect(() => {
        fetchUserById(selectedUserId);
    }, [selectedUserId]);

    return (
        <UserContext value={{ user, loading_user }}>
            {children}
        </UserContext>
    );
};

export const useUserContext = () => {
    try {
        return useContext(UserContext);
    } catch (e) {
        console.log(e);
        throw new Error("useUserContext must be used within a UserProvider ");
    }
};
