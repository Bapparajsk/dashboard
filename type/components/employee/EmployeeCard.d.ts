export interface EmployeeCardProps {
    id: string | number;
    name: string;
    description?: string;
    role?: string;
    isOnline?: boolean;
    lastOnline?: Date;
    isNew?: boolean;
    refUser?: string;
    targetClosest?: string;
    isSelected?: boolean;
    logCount?: number;
    starEmployee?: boolean
}
