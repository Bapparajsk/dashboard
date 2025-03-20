"use client";
import { motion } from "motion/react";
import {cn} from "@heroui/react";

const tempNumbers = Array.from({length: 10}, (_, i) => i);

interface NumberTickerProps {
    value: string;
    size?: "sm" | "md";
    className?: string;
}

export const NumberTicker = ({ value, size = "md", className } : NumberTickerProps) => {
    const base = size === "sm" ? 24 : 32;
    const height = size === "sm" ? 5 : 7;

    return (
        <div className={cn(`h-${height} flex overflow-hidden`, className)}>
            {value.split("").map((number, index) => (
                <Ticker key={index} base={base} value={Number(number)}/>
            ))}
        </div>
    );
};

const Ticker = ({value, base} : {value: number, base: number}) => {
    const position = value * base;

    return (
        <motion.div
            animate={{transform: `translateY(-${position}px)`}}
            transition={{duration: 0.8, ease: "easeInOut", type: "spring", stiffness: 100, damping: 20}}
        >
            {tempNumbers.map((number) => (
                <div key={number} className={"font-bold"}>
                    {number}
                </div>
            ))}
        </motion.div>
    );
};
