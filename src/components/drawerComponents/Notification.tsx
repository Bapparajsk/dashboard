import {ComponentWrapper, WrapperCard} from "./Wrapper";
import {WrapperCardProps} from "&/components/drawerComponents/notification";

const notificationData: WrapperCardProps[] = [
    {
        title: "Change Password",
        description: "your password has been changed successfully.",
        time: new Date(),
        avatarSrc: "/change-password.webp"
    },
    {
        title: "Change Avatar",
        description: "your avatar has been changed successfully.",
        time: new Date(),
        avatarSrc: "/change-avter.jpg"
    },
    {
        title: "New Message",
        description: "Do not forget to check your inbox.",
        time: new Date("2025-5-03-12:00"),
        avatarSrc: "/alert.jpg"
    },
];

export const Notification = () => {
    return (
        <ComponentWrapper>
            {notificationData.map((notification, index) => (
                <WrapperCard
                    key={index}
                    {...notification}
                />
            ))}
            {notificationData.map((notification, index) => (
                <WrapperCard
                    key={index}
                    {...notification}
                />
            ))}
            {notificationData.map((notification, index) => (
                <WrapperCard
                    key={index}
                    {...notification}
                />
            ))}
            {notificationData.map((notification, index) => (
                <WrapperCard
                    key={index}
                    {...notification}
                />
            ))}
            {notificationData.map((notification, index) => (
                <WrapperCard
                    key={index}
                    {...notification}
                />
            ))}
            {notificationData.map((notification, index) => (
                <WrapperCard
                    key={index}
                    {...notification}
                />
            ))}
            {notificationData.map((notification, index) => (
                <WrapperCard
                    key={index}
                    {...notification}
                />
            ))}
            {notificationData.map((notification, index) => (
                <WrapperCard
                    key={index}
                    {...notification}
                />
            ))}
            {notificationData.map((notification, index) => (
                <WrapperCard
                    key={index}
                    {...notification}
                />
            ))}
        </ComponentWrapper>
    );
};
