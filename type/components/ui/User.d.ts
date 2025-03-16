export interface UserProps {
    className?: string;
    onClick?: () => void;
    name: string;
    role: string;
    description: string;
    imageSrc?: string | undefined;
}
