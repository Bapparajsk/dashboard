import {CardBody, Card, } from "@heroui/react";
import {NavButtons} from "@/components/navbar/NavButtons";

export const ProfileNav = () => {

    return (
        <Card fullWidth={true} className={"h-full border border-gray-700"}>
            <CardBody className={"px-10 flex-row items-center justify-end"}>
                <div className={"flex gap-2"}>
                    <NavButtons showLogout={false} className={"px-1"}/>
                </div>
            </CardBody>
        </Card>
    );
};
