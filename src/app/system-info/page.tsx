import {Graph} from "@/components/systemInfo/Graph";
import {Memory} from "@/components/systemInfo/Memory";

const SystemInfo = () => {
    return (
        <div className={"w-full h-full flex flex-col gap-2 p-2 overflow-y-auto"}>
            <div className={"w-full h-fit flex gap-2"}>
                <Graph hading={"cpu"}/>
                <Graph hading={"memory"}/>
            </div>
            <div className={"w-full flex gap-2"}>
                <div className={"w-4/12 h-full"}>
                    <Memory/>
                </div>
                <div className={"w-6/12 h-full"}>
                    <Graph hading={"network status"}/>
                </div>
                <div className={"w-3/12 h-full"}>
                    <Memory/>
                </div>
            </div>
        </div>
    );
};

export default SystemInfo;
