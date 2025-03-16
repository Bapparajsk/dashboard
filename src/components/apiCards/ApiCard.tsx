import {Card} from "@/components/apiCards/Card";
import {IconCloudComputing, IconPolaroid, IconUser, IconUsers} from "@tabler/icons-react";
import {NumberTicker} from "@/components/ui/NumberTicker";

export const ApiCard = () => {
    return (
        <div className={"w-full border-b border-gray-600 py-3 px-5 flex justify-center gap-2"}>
            <Card
                Icon={IconUsers}
                title={"User"}
                status={"+20.1% from last month"}
                value={
                    <div className={"flex gap-1"}>
                        +<NumberTicker value={"3293"}/>
                    </div>
                }
            />
            <Card
                Icon={IconUser}
                title={"Online"}
                status={"+20.1% from last hour"}
                value={
                    <div className={"flex gap-1"}>
                        +<NumberTicker value={"3293"}/>
                    </div>
                }
            />
            <Card
                Icon={IconPolaroid}
                title={"Post"}
                status={"+98.7% from last month"}
                value={
                    <div className={"flex gap-1"}>
                        +<NumberTicker value={"39458734"}/>
                    </div>
                }
            />
            <Card
                Icon={IconCloudComputing}
                title={"Api"}
                status={"+98.7% from last hour"}
                value={
                    <div className={"flex gap-1"}>
                        +<NumberTicker value={"3945873434"}/>
                    </div>
                }
            />
        </div>
    );
};
