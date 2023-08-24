import React, { FC, useCallback, useMemo, useState } from "react";
import { Post } from "./types";
import { FlexColumn, FlexRow } from "../shared/flex";
import { useFetchData } from "../../hooks/useFetchData";
import { DashboardUserInterface } from "../users/types";
import styled from "styled-components";
import { RxAvatar } from "react-icons/rx";
import { CommentInterface } from "../comments/types";
import { FaRegComments } from "react-icons/fa";

interface PostItemProps {
  post: Post;
}

const ContentWrapper = styled.div``;

export const PostItem: FC<PostItemProps> = ({ post }) => {
  const options = useMemo(() => ({ method: "GET" }), []);
  const [isShowComments, setIsShowComments] = useState<boolean>(false);

  const { body, id, userId, title } = post;

  const { data, isLoading } = useFetchData<DashboardUserInterface>(
    `https://jsonplaceholder.typicode.com/user/${userId}`,
    options
  );

  const { data: comments, isLoading: isCommentsLoading } = useFetchData<
    CommentInterface[]
  >(`https://jsonplaceholder.typicode.com/comments?postId=${id}`, options);

  const onShowCommentsToggle = useCallback(() => {
    setIsShowComments(!isShowComments);
  }, [isShowComments]);
  return (
    <ContentWrapper alignItems="flex-start" flexDirection="colums">
      <FlexRow alignItems="center" gap="10px">
        <RxAvatar size={40} />
        <h4>{data?.username}</h4>
        <span>{data?.email}</span>
      </FlexRow>
      <h4>{title.toUpperCase()}</h4>
      <span>{body}</span>
      <button onClick={() => onShowCommentsToggle()}>
        {isShowComments ? "Hide" : "Show"} comments
      </button>

      {isShowComments && (
        <FlexColumn width="100%">
          {comments?.map(({ name, body }) => (
            <ContentsWrapper
              flexDirection="row"
              alignItems="flex-start"
              gap="10px"
              margin="5px"
              background="grey !important"
            >
                <FlexRow alignItems="center" gap="10px">
                    <FaRegComments size={30}/>
                <h4>{name}</h4>
                </FlexRow>
                <FlexRow width="50%">
                <p>{body}</p>
                </FlexRow>
              
            </ContentsWrapper>
          ))}
        </FlexColumn>
      )}
    </ContentWrapper>
  );
};
