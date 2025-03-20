import { useQueryState } from "nuqs";
import {Key} from "react";

export const useListTab = () => {
    const [list, setList] = useQueryState("list-tab", { defaultValue: "" });

    const setListName = (name: "users" | "emails") => {
        setList(name).catch(console.log);
    };

    return { list, setListName };
};

export const useUserTab = () => {
    const [userTab, setUserTab] = useQueryState("user-tab", { defaultValue: "" });

    const setUserTabName = (name: Key) => {
        setUserTab(name as string).catch(console.log);
    };
    return { userTab, setUserTabName };
};

