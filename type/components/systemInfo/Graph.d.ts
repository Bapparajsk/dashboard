import {ReactNode} from "react";
import {ChartConfig} from "@/components/ui/chart";


export interface GraphProps {
    hading?: string | ReactNode;
    chartConfig?: ChartConfig
}
