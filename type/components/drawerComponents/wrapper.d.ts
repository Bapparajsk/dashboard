import {ReactNode} from "react";

export interface ComponentWrapperProps {
    children: ReactNode;
    onPress?: () => void;
    title: "inbox" | "notification";
}
