import React, { useCallback, useMemo } from "react";
import { Post } from "./types";
import { useFetchData } from "../../hooks/useFetchData";
import { FlexColumn } from "../shared/flex";
import { PostItem } from "./PostItem";

export const PostsList = () => {

   const options = useMemo(() => ({ method: "GET"}), []);

  const { data, isLoading } = useFetchData<Post[]>(
    "https://jsonplaceholder.typicode.com/posts", 
    options
  );

  const fn = useCallback(() => {
    const a = Math.random() * 100
  }, [data]);

  return (
    <FlexColumn width="100%" alignItems="center">
      <h1 onClick={() => fn()}>Posts</h1>
      
      {data?.map((post) => (
        <PostItem post={post} />
      ))}
    </FlexColumn>
  );
};
