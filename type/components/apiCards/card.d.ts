import {Icon} from "@tabler/icons-react";
import {ReactNode} from "react";

export interface CardProps {
    title: string;
    Icon: Icon;
    value: ReactNode;
    status: ReactNode;
}
