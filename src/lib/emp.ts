import {EmpType} from "&/emp/emp";

const emp = {
    name: "John",
    age: 30,
    role: "Developer",
    description: "A developer who loves to code",
};

export const getEmp = async () : Promise<EmpType> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(emp);
        }, 1000);
    });
};


