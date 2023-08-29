// src/comments/CommentItem.tsx
import React, { FC } from 'react';
import { CommentInterface } from './types'; 
import { FlexColumn } from '../shared/flex';

interface CommentItemProps {
  comment: CommentInterface;
}

export const CommentItem: FC<CommentItemProps> = ({ comment }) => {
  const { name, email, body } = comment;
  
  return (
    <FlexColumn
      width= "calc(100% - 300px)"
      background="pink"
      margin="5px"
      padding="10px"
    >
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{body}</p>
    </FlexColumn>
  );
};
