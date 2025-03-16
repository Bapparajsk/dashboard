import {Chart} from "@/components/charts";
import {Navbar} from "@/components/navbar";
import {ApiCard} from "@/components/apiCards";


const Home = () => {
    return (
        <div className={"w-full h-full"}>
            <Navbar/>
            <ApiCard/>
            <Chart/>
        </div>
    );
};

export default Home;
