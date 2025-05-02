import {Key} from "react";
export interface UserType {
    id: number
    name: string;
    description: string;
    isEmailVerified: boolean;
    online: boolean;
    friendCount: number;
    postCount: number;
}

export interface UserListContextType {
    user: UserType | null;
    loading_user: boolean;
    fetchUsers: ({page}: {page?: number}) => Promise<{ users: UserType[]; nextPage: number | null }>;
    listTabKey: string;
    setListTabKeyName: (name: Key) => void;
    fetchUserById: (id?: number | undefined) => Promise<UserType | null>;
    selectedUserId: number;
    setSelectedUserId: (id: number) => void;
    userTab: string;
    setUserTabName: (key: Key) => void;
}
