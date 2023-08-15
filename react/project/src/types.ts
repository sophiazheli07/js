import { Dispatch, JSX } from "react";

export interface MainContextInterface {
    posts: PostsInterface[];
    setPosts: Dispatch<PostsInterface[]>

}

export interface PostsInterface {
    body: string;
    id: number;
    title: string;
    userId: number;

}