import {useState} from "react";

function generateTempEmails(count = 10) {
    const headings = [
        "Post Issue", "Email Validation Issue", "Image Upload Issue", "Login Failure", "Server Downtime",
        "Payment Processing Error", "Profile Update Failed", "Notification Not Received", "Friend Request Bug", "Comment Posting Error"
    ];

    const descriptions = [
        "Users are unable to post new content. The submit button is unresponsive.",
        "Some users are reporting that their email is not being validated correctly.",
        "Image uploads are failing with a 500 error. Possible issue with cloud storage.",
        "Login attempts are failing intermittently with a 401 error.",
        "The server is down for some regions. Users are experiencing connection issues.",
        "Payments are not processing for some users. Transaction errors detected.",
        "Users are unable to update their profiles. Changes are not being saved.",
        "Users are not receiving notifications for new messages and friend requests.",
        "Friend request approvals are not working. The button does not respond.",
        "Users are facing issues posting comments. Comments do not appear after submission."
    ];

    return Array.from({ length: count }, (_, idx) => {
        const id = idx;
        const heading = headings[idx % headings.length];
        const description = descriptions[idx % descriptions.length];
        const createdAt = new Date(Date.now() - Math.random() * 1000000000).toISOString(); // Random past timestamp

        return { id, heading, description, createdAt };
    });
}

export const Emails = () => {

    const [emails, setEmails] = useState(generateTempEmails());

    return (
        <div className="w-full h-full overflow-y-auto scrollbar-hide pb-[3.2rem] pt-2 px-2 ">
            {emails.map((email, idx) =>(
                <EmailCard {...email} key={idx}/>
            ))}
            {emails.map((email, idx) =>(
                <EmailCard {...email} key={idx}/>
            ))}
        </div>
    );
};

interface EmailCardProps {
    id: number;
    heading: string;
    description: string;
    createdAt: string;
}

const maxLen = 35;

function EmailCard({ id, heading, description,  createdAt } : EmailCardProps) {
    function formatCreatedAt(dateString: string): string {
        const date = new Date(dateString);
        const now = new Date();

        const isSameDay = date.toDateString() === now.toDateString();
        const isSameYear = date.getFullYear() === now.getFullYear();

        const options: Intl.DateTimeFormatOptions = {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        };

        if (isSameDay) {
            // Show time if it's today
            return new Intl.DateTimeFormat("en-US", options).format(date).toLowerCase();
        } else if (isSameYear) {
            // Show "29Mar", "10Jan" format if it's the same year
            return `${date.getDate()} ${date.toLocaleString("en-US", { month: "short" })}`;
        } else {
            // Show full format for other years
            return `${date.getDate()}${date.toLocaleString("en-US", { month: "short" })} ${date.getFullYear()}`;
        }
    }

    const formatDescription = (): string => {
        const remainLen = maxLen - heading.length;
        if(description.length < remainLen) return description;
        return description.substring(0, remainLen) + "...";
    };

    return (
        <div className={"w-full h-fit p-2 mb-2 border border-gray-600 cursor-pointer rounded-md flex justify-between hover:border-gray-300 transition-all duration-300"}>
            <div className={"flex h-full gap-2 items-center justify-center"}>
                <h3>{heading}</h3>
                <p className={"font-normal text-gray-500"}>: {formatDescription()}</p>
            </div>
            <p className={"font-bold"}>{formatCreatedAt(createdAt)}</p>
        </div>
    );
}
