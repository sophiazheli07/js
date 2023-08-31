import React, { useContext, useMemo } from "react";
import { useFetchData } from "../../hooks/useFetchData";
import { DashboardUserInterface } from "./types";
import { FlexColumn } from "../shared/flex";
import { UserItem } from "./UserItem";
import { Search } from "../shared/Search";
import { SearchContext } from "../../contexts/SearchContext";

export const UsersList = () => {
  const { users, userSearchResults, value } = useContext(SearchContext)!;

  console.log(userSearchResults, "search of users");

  return (
    <FlexColumn width="100%" alignItems="center">
      <h1>Users</h1>
      <Search />
      {(value ? userSearchResults : users).map((user) => (
        <UserItem user={user} />
      ))}
    </FlexColumn>
  );
};