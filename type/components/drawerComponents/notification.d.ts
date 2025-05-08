export interface WrapperCardProps {
    title: string;
    description: string;
    time: Date;
    avatarSrc: string;
    isInboxCard?: boolean
    isOnline?: boolean
    onPress?: () => void
}
