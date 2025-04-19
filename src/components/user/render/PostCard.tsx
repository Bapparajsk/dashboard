import {Button, Card, Tooltip} from "@heroui/react";
import {CardBody} from "@heroui/card";
import {IconAlertSmall, IconHeart, IconMessage, IconShare} from "@tabler/icons-react";
import {motion} from "motion/react";
import Image from "next/image";
import {PostType} from "&/user/post";

const MotionImage = motion(Image);

interface PostCardProps extends PostType {
    idx: number;
    onHideClick: (idx: number) => void;
}

export const PostCard = (post : PostCardProps) => {
    return (
        <Card radius="lg" fullWidth={true} className={`${post.isHidden ? "bg-user-post-card-hidden" : "bg-user-post-card"}  border border-gray-600 hover:border-gray-300`}>
            <CardBody>
                <div className={"w-full flex gap-2"}>
                    <div className={"w-1/3 h-full"}>
                        <MotionImage
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2 },
                            }}
                            whileTap={{
                                scale: 0.95,
                                transition: { duration: 0.2 },
                            }}
                            src={post.imageUrl}
                            alt={post.title}
                            width={500}
                            height={500}
                            className={"object-cover rounded-md cursor-pointer"}
                        />
                    </div>
                    <div className={"w-2/3 h-auto flex flex-col justify-between"}>
                        <div className={"flex flex-col"}>
                            <p>{post.title}</p>
                            <p className={"font-normal text-sm"}>{post.description}</p>
                        </div>
                        <div className={"flex items-center justify-between mt-2"}>
                            <div className={"flex items-center gap-2 text-sm"}>
                                <div className={"flex items-center justify-center gap-1 px-2 py-1 border border-gray-600 rounded-xl cursor-pointer"}>
                                    <IconHeart size={20}/>
                                    <p>29K</p>
                                </div>
                                <div className={"flex items-center justify-center gap-1 px-2 py-1 border border-gray-600 rounded-xl cursor-pointer"}>
                                    <IconMessage size={20}/>
                                    <p>29.2M</p>
                                </div>
                                <div className={"flex items-center justify-center gap-1 px-2 py-1 border border-gray-600 rounded-xl cursor-pointer"}>
                                    <IconShare size={20}/>
                                    <p>29K</p>
                                </div>
                            </div>
                            <Tooltip
                                color={"foreground"}
                                content={"Setting"}
                                className={"cursor-pointer"}
                            >
                                <Button
                                    variant={"ghost"}
                                    isIconOnly={true}
                                    radius={"lg"}
                                    size={"sm"}
                                    color={post.isHidden ? "danger" : "primary"}
                                    onPress={() => post.onHideClick(post.idx)}
                                >
                                    <IconAlertSmall size={30}/>
                                </Button>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};


export const ModelPostcard = (post : PostType) => {
    return (
        <Card radius="lg" fullWidth={true} className={`${post.isHidden ? "bg-user-post-card-hidden" : "bg-user-post-card"}  border border-gray-600`}>
            <CardBody>
                <div className={"w-full flex gap-2"}>
                    <div className={"w-1/3 h-full"}>
                        <MotionImage
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2 },
                            }}
                            whileTap={{
                                scale: 0.95,
                                transition: { duration: 0.2 },
                            }}
                            src={post.imageUrl}
                            alt={post.title}
                            width={500}
                            height={500}
                            className={"object-cover rounded-md cursor-pointer"}
                        />
                    </div>
                    <div className={"w-2/3 h-auto flex flex-col justify-between"}>
                        <div className={"flex flex-col"}>
                            <p>{post.title}</p>
                            <p className={"font-normal text-sm"}>{post.description}</p>
                        </div>
                        <div className={"flex items-center justify-between mt-2"}>
                            <div className={"flex items-center gap-2 text-sm"}>
                                <div className={"flex items-center justify-center gap-1 px-2 py-1 border border-gray-600 rounded-xl cursor-pointer"}>
                                    <IconHeart size={20}/>
                                    <p>29K</p>
                                </div>
                                <div className={"flex items-center justify-center gap-1 px-2 py-1 border border-gray-600 rounded-xl cursor-pointer"}>
                                    <IconMessage size={20}/>
                                    <p>29.2M</p>
                                </div>
                                <div className={"flex items-center justify-center gap-1 px-2 py-1 border border-gray-600 rounded-xl cursor-pointer"}>
                                    <IconShare size={20}/>
                                    <p>29K</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};
