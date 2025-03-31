import {MouseEvent} from "react";

interface ParentClickHandlerType {
    e: MouseEvent<HTMLDivElement>;
    targetClosest: string;
    attributeName: string;
}

export const parentClickHandler = ({e, attributeName, targetClosest}:ParentClickHandlerType): string | null => {
    const target = e.target as HTMLElement;
    const employeeCard = target.closest(targetClosest);

    if (employeeCard) {
        return employeeCard.getAttribute(attributeName);
    }

    return null;
};
