import React, { FC } from "react";
import { DashboardUserInterface } from "./types";
import { FlexColumn, FlexRow } from "../shared/flex";

interface PropsInterface {
  user: DashboardUserInterface;
}

export const UserItem: FC<PropsInterface> = ({ user }) => {
  const { name, email, phone } = user;
  return (
    <FlexRow
      width="calc(100% - 30px)"
      background="pink"
      margin="5px"
      justifyContent="space-between"
      padding="10px"
    >
      <FlexColumn>
        <h3>{name}</h3> <p>{email}</p>
      </FlexColumn>
      <span>{phone}</span>
    </FlexRow>
  );
};
