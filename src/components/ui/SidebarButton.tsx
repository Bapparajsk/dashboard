import Link from "next/link";
import { IconArrowMoveRight } from "@tabler/icons-react";
import { Button } from "@heroui/button";
import { ButtonDataType } from "&/components/ui/SidebarButton";
import { cn } from "@heroui/react";

const borderColors = {
    blue: "hover:border-blue-500",
    green: "hover:border-green-500",
    purple: "hover:border-purple-500",
    red: "hover:border-red-500",
};

const textColors = {
    blue: "group-hover:text-blue-500",
    green: "group-hover:text-green-500",
    purple: "group-hover:text-purple-500",
    red: "group-hover:text-red-500",
};

export const SidebarButton = ({ Icon, label, link, isDanger }: ButtonDataType) => {

    const transform = "transition-transform duration-300 ease-in-out";

    return (
        <Button
            fullWidth={true}
            as={Link}
            href={link}
            variant={isDanger ? "ghost" : "bordered"}
            color={isDanger ? "danger" : "default"}
            className={cn(
                "justify-between group ", transform,
                !isDanger && "text-gray-500 hover:border-gray-300 hover:text-gray-300"
            )}
        >
            <div className="flex gap-2 items-center">
                <Icon className={cn("group-hover:scale-[1.2]",  transform)} size={20} />
                <span className={cn("font-semibold group-hover:translate-x-2",  transform)}>
                    {label}
                </span>
            </div>
            <IconArrowMoveRight className={cn("group-hover:translate-x-2", transform)} />
        </Button>
    );
};
