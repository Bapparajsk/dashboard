"use client";
import { Pie, PieChart } from "recharts";

import {
    Card,
    CardHeader,
} from "@heroui/card";
import {
    ChartConfig,
    ChartContainer, ChartLegend, ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
    { browser: "chrome", visitors: 10, value: "100s" , fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 80, value: "100s" , fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 10, value: "299MB" , fill: "var(--color-firefox)" },
];

const chartConfig = {
    visitors: {
        label: "value",
    },
    chrome: {
        label: "Chrome",
        color: "hsl(var(--chart-1))",
    },
    safari: {
        label: "Safari",
        color: "hsl(var(--chart-2))",
    },
    firefox: {
        label: "Firefox",
        color: "hsl(var(--chart-3))",
    },
    edge: {
        label: "Edge",
        color: "hsl(var(--chart-4))",
    },
    other: {
        label: "Other",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig;

export function Memory() {
    return (
        <Card fullWidth={true} className={"h-full"}>
            <CardHeader>
                <div>
                    <h2 className={"font-semibold text-xl capitalize"}>Memory</h2>
                </div>
            </CardHeader>
            <div className={"w-full"}>
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px] w-full pb-0 [&_.recharts-pie-label-text]:fill-foreground"
                >
                    <PieChart >
                        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                        <Pie data={chartData} dataKey="visitors" label={({ payload }) => payload.value}  nameKey="browser" valueKey={"value"} />
                        <ChartLegend
                            content={<ChartLegendContent nameKey="browser" />}
                            className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
                        />
                    </PieChart>
                </ChartContainer>
            </div>
        </Card>
    );
}
