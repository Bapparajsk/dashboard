import Link from "next/link";
import { IconArrowMoveRight } from "@tabler/icons-react";
import { Button } from "@heroui/button";
import { ButtonDataType } from "&/components/ui/SidebarButton";
import { cn } from "@heroui/react";

export const SidebarButton = ({ Icon, label, link, color }: ButtonDataType) => {

    const transform = "transition-transform duration-200 ease-in-out";

    return (
        <Button
            fullWidth
            variant="bordered"
            as={Link}
            href={link}
            className={cn(
                "justify-between group text-gray-500 ",transform,
                `hover:border-${color}-500`
            )}
        >
            <div className="flex gap-2 items-center">
                <Icon className={cn(`group-hover:text-${color}-500 group-hover:scale-[1.2]`, transform)} size={20} />
                <span className={cn("font-semibold group-hover:translate-x-2", `group-hover:text-${color}-500`, transform)}>
                    {label}
                </span>
            </div>
            <IconArrowMoveRight className="group-hover:translate-x-2 transition-all" />
        </Button>
    );
};
