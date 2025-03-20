import {Navbar} from "@/components/navbar";
import {ApiCard} from "@/components/apiCards";
import {UserList} from "@/components/user";


const Home = () => {
    return (
        <div className="flex flex-col h-full">
            <Navbar />
            <ApiCard />
            <UserList />
        </div>
    );
};

export default Home;
