import {EmailType} from "@/components/user/render/Emails";
import {Button} from "@heroui/button";
import {IconArrowNarrowLeft, IconCornerUpLeft, IconTrash} from "@tabler/icons-react";
import {getIssueCategory} from "@/components/user/render/EmailCard";
import {Tooltip} from "@heroui/tooltip";

interface OpenEmailProps {
    back: () => void;
    email: EmailType
}

export const OpenEmail = ({ back, email }:OpenEmailProps) => {

    const issueCategory = getIssueCategory(email.heading);

    return (
        <div className={"w-full h-full flex flex-col"}>
            <div className={"w-full h-fit p-2 flex gap-2 items-center justify-between border-b border-gray-600"}>
                <div className={"flex gap-2 items-center"}>
                    <Tooltip content={"Back"} color={"foreground"}>
                        <Button onPress={back} variant={"bordered"} isIconOnly={true} size={"sm"} className={"group hover:border-gray-300"}>
                            <IconArrowNarrowLeft size={20} className={"text-gray-500 group-hover:text-gray-300 group-hover:-translate-x-1 transition-all duration-300"}/>
                        </Button>
                    </Tooltip>
                    <h2 className={`${issueCategory.color}`}>
                        {email.heading} {" "}
                        <span className={"font-normal text-sm text-gray-400"}>
                        ({issueCategory.category})
                    </span>
                    </h2>
                </div>
                <div className={"flex gap-2"}>
                    <Tooltip content={"Reply"} color={"primary"}>
                        <Button variant={"bordered"} color={"primary"} isIconOnly={true} size={"sm"}>
                            <IconCornerUpLeft size={18}/>
                        </Button>
                    </Tooltip>
                    <Tooltip content={"Delete"} color={"danger"}>
                        <Button variant={"bordered"} color={"danger"} isIconOnly={true} size={"sm"}>
                            <IconTrash size={18}/>
                        </Button>
                    </Tooltip>
                </div>
            </div>
            <div className={"w-full overflow-y-auto p-3 text-sm text-gray-400 mb-[3.2rem]"}>
                {email.description}
            </div>
        </div>
    );
};
