import React, { useCallback, useContext, useMemo } from "react";
import { Post } from "./types";
import { useFetchData } from "../../hooks/useFetchData";
import { FlexColumn } from "../shared/flex";
import { PostItem } from "./PostItem";
import { SearchContext } from "../../contexts/SearchContext";
import { Search } from "../shared/Search";

export const PostsList = () => {

  const { posts, postsSearchResults, value } = useContext(SearchContext)!;



  return (
    <FlexColumn width="100%" alignItems="center">
      <h1>Posts</h1>
      <Search/>
      {(value ? postsSearchResults : posts).map((post) => (
        <PostItem post={post} />
      ))}
    </FlexColumn>
  );
};
