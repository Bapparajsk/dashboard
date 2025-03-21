"use client";

import {useEffect, useState} from "react";
import {EmpType} from "&/emp/emp";
import {getEmp} from "@/lib/emp";


export const useEmp = () => {

    const [emp, setEmp] = useState<EmpType | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getEmp().then((emp) => {
            setEmp(emp);
            setLoading(false);
        });
    },[]);

    return { emp, loading };
};
