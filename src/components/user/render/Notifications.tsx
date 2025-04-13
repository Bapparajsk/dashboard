import {Input} from "@heroui/react";
import {Textarea} from "@heroui/input";
import {Button} from "@heroui/button";
import {IconSend} from "@tabler/icons-react";

export const Notifications = () => {
    return (
        <div className={"w-full h-full flex flex-col justify-between p-2"}>
            <div className={"w-full h-full flex flex-col gap-2"}>
                <Input
                    label="Title"
                    labelPlacement={"outside"}
                    type="text"
                    placeholder={"Title"}
                />
                <Textarea
                    label="Description"
                    labelPlacement={"outside"}
                    type="text"
                    // placeholder={"Description"}
                    minRows={15}
                />
            </div>
            <div>
                <Button
                    fullWidth={true}
                    variant={"shadow"}
                    color={"primary"}
                    size={"lg"}
                    // isLoading={true}
                >
                    <IconSend/>
                    Send Notification
                </Button>
            </div>
        </div>
    );
};
