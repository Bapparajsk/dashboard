import {Input} from "@heroui/react";
import {Textarea} from "@heroui/input";
import {Button} from "@heroui/button";
import {Checkbox} from "@heroui/checkbox";
import {Select, SelectItem} from "@heroui/select";
import {IconSend} from "@tabler/icons-react";

export const animals = [
    {key: "cat", label: "Cat"},
    {key: "dog", label: "Dog"},
    {key: "elephant", label: "Elephant"},
    {key: "lion", label: "Lion"},
    {key: "tiger", label: "Tiger"},
    {key: "giraffe", label: "Giraffe"},
    {key: "dolphin", label: "Dolphin"},
    {key: "penguin", label: "Penguin"},
    {key: "zebra", label: "Zebra"},
    {key: "shark", label: "Shark"},
    {key: "whale", label: "Whale"},
    {key: "otter", label: "Otter"},
    {key: "crocodile", label: "Crocodile"},
];

export const Notifications = () => {
    return (
        <div className={"w-full h-full flex flex-col justify-between p-2"}>
            <div className={"w-full h-full flex flex-col gap-2"}>
                <Select variant={"bordered"} labelPlacement="outside" label="Select an animal" isRequired={true}>
                    {animals.map((animal) => (
                        <SelectItem key={animal.key}>{animal.label}</SelectItem>
                    ))}
                </Select>
                <Input
                    isRequired={true}
                    label="Title"
                    labelPlacement={"outside"}
                    type="text"
                    placeholder={"Title"}
                    variant={"bordered"}
                />
                <Textarea
                    isRequired={true}
                    label="Description"
                    labelPlacement={"outside"}
                    type="text"
                    minRows={15}
                    variant={"faded"}
                    placeholder={"Description"}
                    minLength={10}
                />
            </div>
            <div className={"w-full flex flex-col gap-2"}>
                <Checkbox> <span className={"text-sm text-gray-400"}>Send to Email</span> </Checkbox>
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
