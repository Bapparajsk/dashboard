import {EmployeeType} from "&/context/empContext";

const emp : EmployeeType  = {
    name: "John",
    age: 30,
    role: "admin",
    description: "A developer who loves to code",
};

export const getEmp = async () : Promise<EmployeeType> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(emp);
        }, 1000);
    });
};


