"use client";

import {useState} from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    Button,
    ModalFooter,
    useDisclosure,
} from "@heroui/react";
import {PostType} from "&/user/post";
import {ModelPostcard, PostCard} from "@/components/user/render/PostCard";
import {useUserList} from "@/context/userListContext";

const posts: PostType[] = [
    {
        id: 1,
        title: "Post Title 1",
        description: "This is the description for post 1.",
        createdAt: "2023-10-01T12:00:00Z",
        imageUrl: "https://heroui.com/images/hero-card.jpeg",
        isHidden: false,
    },
    {
        id: 2,
        title: "Post Title 2",
        description: "This is the description for post 2.",
        createdAt: "2023-10-02T12:00:00Z",
        imageUrl: "https://heroui.com/images/hero-card.jpeg",
        isHidden: false,
    },
    {
        id: 3,
        title: "Post Title 3",
        description: "This is the description for post 3.",
        createdAt: "2023-10-01T12:00:00Z",
        imageUrl: "https://heroui.com/images/hero-card.jpeg",
        isHidden: true,
    },
    {
        id: 4,
        title: "Post Title 4",
        description: "This is the description for post 4.",
        createdAt: "2023-10-02T12:00:00Z",
        imageUrl: "https://heroui.com/images/hero-card.jpeg",
        isHidden: true,
    },
];

export const Posts = () => {

    const [postList, setPostList] = useState<PostType[]>(posts);
    const [selectPost, setSelectPost] = useState<PostType | null>(null);
    const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();
    const {user} = useUserList();

    const handlePostClick = (idx: number) => {
        const post = postList[idx];
        setSelectPost(post);
        onOpen();
    };

    const handleHidePost = (id: number | undefined) => {
        if (id === undefined) return;
        const updatedPosts = postList.map((post) => {
            if (post.id === id) {
                return {...post, isHidden: !post.isHidden};
            }
            return post;
        });

        // todo api call

        setPostList(updatedPosts);
        onClose();
    };

    return (
        <>
            <div className={"p-2 mb-12 gap-2 space-y-2"}>
                {postList.map((post, idx) => (
                    <div key={idx} className="w-full h-auto">
                        <PostCard {...post} key={idx} idx={idx} onHideClick={handlePostClick}/>
                    </div>
                ))}
            </div>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                backdrop={"blur"}
                size={"2xl"}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader
                                className={"flex items-center justify-between"}
                                // onClick={(e: MouseEvent) => parentClickHandler(e, onClose)}
                            >
                                <div className={"flex items-center gap-2"}>
                                    <h1 className={"text-2xl font-bold"}>Post : </h1>
                                    <p className={"text-xl text-gray-500"}>{user?.name}</p>
                                </div>

                            </ModalHeader>
                            <ModalBody>
                                {selectPost && <ModelPostcard {...selectPost}/>}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="default" variant="bordered" onPress={onClose}>
                                    cancel
                                </Button>
                                <Button
                                    color={selectPost?.isHidden ?"primary" : "danger"}
                                    variant={"shadow"} onPress={() => handleHidePost(selectPost?.id)}
                                >
                                    {selectPost?.isHidden ? "Show Post" : "Hide Post"}
                                </Button>
                                <Button
                                    color={"danger"}
                                    variant={"ghost"} onPress={() => handleHidePost(selectPost?.id)}
                                >
                                    {"Delete Post"}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};


