import {Navbar} from "@/components/navbar";
import {UserList} from "@/components/user";

const Home = () => {
    return (
        <div className="h-full">
            <div className={"h-[7%]"}>
                <Navbar />
            </div>
            <div className={"h-[93%]"}>
                <UserList />
            </div>
        </div>
    );
};

export default Home;
