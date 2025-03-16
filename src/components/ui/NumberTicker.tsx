"use client";
import { motion } from "motion/react";

const tempNumbers = Array.from({length: 10}, (_, i) => i);


export const NumberTicker = ({ value } : { value: string }) => {
    const base =  32;

    return (
        <div className={`h-7 flex overflow-hidden`}>
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
