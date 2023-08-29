// src/comments/CommentsList.tsx
import React, { useMemo } from "react";
import { useFetchData } from "../../hooks/useFetchData";
import { CommentInterface } from "./types";
import { CommentItem } from "./CommentItem"; 
import { FlexColumn } from "../shared/flex";

export const CommentsList = () => {
  const options = useMemo(() => ({ method: "GET" }), []);

  const { data, isLoading } = useFetchData<CommentInterface[]>(
    "https://jsonplaceholder.typicode.com/comments",
    options
  );

  return (
    <FlexColumn width="100%" alignItems="center">
      <h1>Comments</h1>
      {data?.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </FlexColumn>
  );
};
