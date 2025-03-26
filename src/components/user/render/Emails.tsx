import {useState, MouseEvent} from "react";
import {EmailCard} from "@/components/user/render/EmailCard";
import {OpenEmail} from "@/components/user/render/OpenEmail";

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
        const isSolved = Math.random() > 0.5;

        return { id, heading, description, createdAt, isSolved };
    });
}

export interface EmailType {
    id: number;
    heading: string;
    description: string;
    createdAt: string;
    isSolved: boolean;
}

export const Emails = () => {

    const [emails] = useState(generateTempEmails());
    const [openEmail, setOpenEmail] = useState<EmailType | null>(null);

    const handelEmailClick = (e: MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;

        if (target.accessKey === undefined) return;
        const email = emails[parseInt(target.accessKey)];
        setOpenEmail(email);
    };

    return (
        <>
            {openEmail ? <OpenEmail email={openEmail} back={() => setOpenEmail(null)}/> : <div onClick={handelEmailClick} className="w-full h-full overflow-y-auto scrollbar-hide pb-[3.2rem] pt-2 px-2 ">
                {emails.map((email, idx) => (
                    <EmailCard {...email} key={idx}/>
                ))}
            </div>}
        </>
    );
};

