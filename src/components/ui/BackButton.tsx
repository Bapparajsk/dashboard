import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {Button} from "@heroui/button";
import {IconHome} from "@tabler/icons-react";
import {Tooltip} from "@heroui/tooltip";

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
                variant={isDisabled ? "bordered" : "shadow"}
                color={ isDisabled ? "default" : "primary" }
            >
                <IconHome size={18}/>
            </Button>
        </Tooltip>
    );
};

export default BackButton;
