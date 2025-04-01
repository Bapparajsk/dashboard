import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {Button} from "@heroui/button";
import {IconHome} from "@tabler/icons-react";
import {Tooltip} from "@heroui/tooltip";
import {cn} from "@heroui/react";

const BackButton = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => (setIsDisabled(pathname === "/")), [pathname]);
    const handleBack = () => router.replace("/");

    return (
        <Tooltip content={"Home"} placement={"top"} color={"foreground"} isDisabled={isDisabled}>
            <Button
                size={"sm"}
                isIconOnly={true}
                onPress={handleBack}
                disabled={isDisabled}
                variant={"bordered"}
                className={cn(!isDisabled && "border-gray-300")}
            >
                <IconHome size={18} className={cn(isDisabled && "text-gray-500")}/>
            </Button>
        </Tooltip>
    );
};

export default BackButton;
