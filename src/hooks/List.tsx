import {useQueryState} from "nuqs";


export const useUserTab = () => {
    const [userTab, setUserTab] = useQueryState("user-tab", { defaultValue: "profile" });

    const setUserTabName = (name: string) => {
        setUserTab(name as string).catch(console.log);
    };
    return { userTab, setUserTabName };
};

