"use client";

import {Card, Button, Tooltip} from "@heroui/react";
import Image from "next/image";
import {useState} from "react";
import {CardBody} from "@heroui/card";
import {IconEye, IconHeart, IconMessage, IconShare} from "@tabler/icons-react";
import {motion} from "motion/react";

interface PostType {
    id: number;
    title: string;
    description: string;
    createdAt: string;
    imageUrl: string;
    isOpen?: () => void;
}

const MotionImage = motion(Image);

const posts: PostType[] = [
    {
        id: 1,
        title: "Post Title 1",
        description: "This is the description for post 1.",
        createdAt: "2023-10-01T12:00:00Z",
        imageUrl: "https://heroui.com/images/hero-card.jpeg",
    },
    {
        id: 2,
        title: "Post Title 2",
        description: "This is the description for post 2.",
        createdAt: "2023-10-02T12:00:00Z",
        imageUrl: "https://heroui.com/images/hero-card.jpeg",
    },
    {
        id: 3,
        title: "Post Title 1",
        description: "This is the description for post 1.",
        createdAt: "2023-10-01T12:00:00Z",
        imageUrl: "https://heroui.com/images/hero-card.jpeg",
    },
    {
        id: 4,
        title: "Post Title 2",
        description: "This is the description for post 2.",
        createdAt: "2023-10-02T12:00:00Z",
        imageUrl: "https://heroui.com/images/hero-card.jpeg",
    },
];

export const Posts = () => {

    const [isOpenPost, setIsOpenPost] = useState<PostType | null>(null);

    return (
        <>
            <div className={"p-2 mb-12 gap-2 space-y-2"}>
                {posts.map((post, idx) => (
                    <div key={idx} className="w-full h-auto">
                        <PostCard {...post} key={idx} isOpen={() => {
                            setIsOpenPost(post);
                        }}/>
                    </div>
                ))}
            </div>
            {/*{isOpenPost &&*/}
            {/*    */}
            {/*}*/}
        </>
    );
};

function OpenPost({ post, back }: { post: PostType; back: () => void }) {
    return (
        <div className=" flex flex-col p-2">
            <div className="w-full h-full">
                <h2 className="text-lg font-bold">{post.title}</h2>
                <p>{post.description}</p>
                <Image
                    alt={post.title}
                    className="w-full h-full object-cover overflow-hidden rounded-lg mt-4"
                    height={700}
                    src={post.imageUrl}
                    width={700}
                />
            </div>
            <Button
                color="danger"
                radius="lg"
                variant="flat"
                onPress={back}
            >
                Back
            </Button>
        </div>
    );
}

function PostCard(post : PostType) {
    return (
        <Card radius="lg" fullWidth={true} className={"bg-user-post-card user-post-card border border-gray-600 hover:border-gray-300 "}>
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
                            <Tooltip content={"View Post"} color={"foreground"}>
                                <Button variant={"ghost"} isIconOnly={true} radius={"lg"} size={"sm"} onPress={post.isOpen} color={"primary"}>
                                    <IconEye size={"18"}/>
                                </Button>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}
