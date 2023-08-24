import React, { FC } from "react";
import { Post } from "./types";
import { FlexRow } from "../shared/flex";

interface PostItemProps {
  post: Post;
}

export const PostItem: FC<PostItemProps> = ({ post }) => {
    const {body, id, userId, title} = post;
  return <FlexRow width="100%" background="pink" margin="10px">
    <h4>{body}</h4>
    <span></span>
  </FlexRow>
};

