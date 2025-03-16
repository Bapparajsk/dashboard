import {CardProps} from "&/components/apiCards/card";

export const Card = ({ title, status, value, Icon }: CardProps) => {
    return (
        <div className={"w-1/5 h-32 border border-gray-600 rounded-md py-2 px-3 flex flex-col overflow-hidden"}>
            <div className={"w-full flex items-center justify-between"}>
                <h1 className={"text-xl font-semibold text-clip"}>{title}</h1>
                <Icon size={20} stroke={2.5}/>
            </div>
            <div className={"w-full h-full  flex flex-col items-start justify-center gap-1"}>
                <div className={"text-2xl font-bold"}>
                    {value}
                </div>
                <div className={"text-[12px] font-semibold text-gray-500"}>
                    {status}
                </div>
            </div>
        </div>
    );
};
