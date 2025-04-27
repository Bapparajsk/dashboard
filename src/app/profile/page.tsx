import {UserLogs, UserVew} from "@/components/profile";

const Profile= () => {
    return (
        <div className={"w-full h-full flex"}>
            <div className={"w-1/4"}>
                <UserVew/>
            </div>
            <div className={"w-3/4"}>
                <UserLogs/>
            </div>
        </div>
    );
};

export default Profile;
