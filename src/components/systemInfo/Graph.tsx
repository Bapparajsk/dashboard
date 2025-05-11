"use client";

import {CardBody, CardHeader} from "@heroui/card";
import {ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent} from "@/components/ui/chart";
import {CartesianGrid, Line, LineChart, YAxis} from "recharts";
import {Card} from "@heroui/react";
import {GraphProps} from "&/components/systemInfo/Graph";

const chartData = [
    { month: "January", desktop: 186, mobile: 80, views: 266 },
    { month: "February", desktop: 305, mobile: 200, views: 505 },
    { month: "March", desktop: 237, mobile: 120, views: 357 },
    { month: "April", desktop: 73, mobile: 190, views: 263 },
    { month: "May", desktop: 209, mobile: 130, views: 339 },
    { month: "June", desktop: 214, mobile: 140, views: 354 },
];

const chartConfig = {
    views: {
        label: "Page Views",
    },
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
    mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig;

export const Graph = ({ hading }: GraphProps) => {
    return (
        <Card fullWidth={true} className={"max-h-md"}>
            <CardHeader> <h2 className={"font-semibold text-xl capitalize"}>{hading ? hading : "Line chart"}</h2> </CardHeader>
            <CardBody>
                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[250px] w-full"
                >
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        barGap={20}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <YAxis
                            dataKey="views"
                            tickLine={false}
                            axisLine={true}
                            tickMargin={8}
                            tickFormatter={(value) => {
                                return value.toString();
                            }}
                        />
                        <ChartTooltip
                            content={
                                <ChartTooltipContent
                                    className="w-[150px]"
                                    nameKey="month"
                                    labelFormatter={(month) => {
                                        return month;
                                    }}
                                />
                            }
                        />
                        <Line
                            dataKey={"desktop"}
                            type="monotone"
                            stroke={"var(--color-desktop)"}
                            strokeWidth={2}
                            dot={false}

                        />
                        <Line
                            dataKey={"mobile"}
                            type="monotone"
                            stroke={"var(--color-mobile)"}
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardBody>
        </Card>
    );
};
