export interface UserCardProps {
    id: number;
    name: string;
    description?: string;
    isEmailVerified?: boolean;
    online?: boolean;
    isSelected?: boolean;
}
