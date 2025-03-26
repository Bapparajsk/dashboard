import {IconCheck} from "@tabler/icons-react";

interface EmailCardProps {
    id: number;
    heading: string;
    description: string;
    createdAt: string;
    isSolved: boolean;
}

const maxLen = 35;

export function getIssueCategory(heading: string) {
    const majorIssues = ["Server Downtime", "Payment Processing Error", "Login Failure", "Post Issue"];
    const minorIssues = ["Notification Not Received", "Friend Request Bug", "Comment Posting Error"];
    const patchIssues = ["Profile Update Failed", "Email Validation Issue", "Image Upload Issue"];

    if (majorIssues.includes(heading)) return { category: "Major Issue", color: "text-red-500" };
    if (minorIssues.includes(heading)) return { category: "Minor Issue", color: "text-yellow-500" };
    if (patchIssues.includes(heading)) return { category: "Patch Issue", color: "text-green-500" };

    return { category: "General Issue", color: "text-gray-500" }; // Default category
}

export const EmailCard = ({ id, heading, description,  createdAt, isSolved } : EmailCardProps) => {
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
        <div accessKey={id.toString()} className={"w-full h-fit p-2 mb-2 border border-gray-600 cursor-pointer rounded-md flex justify-between hover:border-gray-300 transition-all duration-300"}>
            <div accessKey={id.toString()} className={"flex h-full gap-1 items-center justify-center"}>
                <h3 accessKey={id.toString()} className={`${getIssueCategory(heading).color}`}>{heading}</h3>
                {isSolved && <IconCheck size={20} className={"text-green-500"}/>}
                <p accessKey={id.toString()} className={"font-normal text-gray-500"}>: {formatDescription()}</p>
            </div>
            <p accessKey={id.toString()} className={"font-bold"}>{formatCreatedAt(createdAt)}</p>
        </div>
    );
};
