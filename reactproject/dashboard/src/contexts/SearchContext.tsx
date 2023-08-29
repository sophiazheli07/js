import {
  Children,
  Dispatch,
  FC,
  PropsWithChildren,
  createContext,
  useState,
} from "react";
import { DashboardUserInterface } from "../components/users/types";
import { Post } from "../components/posts/types";
import { useFetchData } from "../hooks/useFetchData";

interface SearchContextInterface {
  users: DashboardUserInterface[];
  posts: Post[];

  value: string;
  setValue: Dispatch<string>;
  userSearchResults: DashboardUserInterface[];
  postsSearchResults: Post[];
}

export const SearchContext = createContext<SearchContextInterface | null>(null);

export const SearchContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [value, setValue] = useState<string>("");

  const { data: users } = useFetchData<DashboardUserInterface[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  const { data: posts } = useFetchData<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const userSearchResults = users
    ? users.filter(({ name }) => name.includes(value))
    : [];
  const postsSearchResults = posts
    ? posts.filter(({ title }) => title.includes(value))
    : [];

  return (
    <SearchContext.Provider
      value={{
        value,
        setValue,
        users: users || [],
        posts: posts || [],
        userSearchResults,
        postsSearchResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
