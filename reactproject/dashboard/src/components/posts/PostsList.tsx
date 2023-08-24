import React, { useEffect, useState } from "react";
import { Post } from "./types";
import { useFetchData } from "../../hooks/useFetchData";
import { FlexColumn } from "../shared/flex";
import { PostItem } from "./PostItem";

export const PostsList: React.FC = () => {
  const { data, isLoading } = useFetchData<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
    {
      method: "GET",
    }
  );

  return (
    <FlexColumn width="100%" alignItems="center">
      <h1>Posts</h1>
      {data?.map((post) => (
        <PostItem post={post} />
      ))}
    </FlexColumn>
  );
};
