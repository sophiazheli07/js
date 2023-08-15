import React, { createContext, useState } from "react";
import { MainContextInterface, PostInterface } from "../types";

export const MainContext = createContext<MainContextInterface | null>(null);
export const MainContextProvider = (props: any) => {
  console.log(props.children);

  const [posts, setPosts] = useState<PostInterface[]>([]);

  const renderPosts = () => {
    return (
      <div className="posts">
        {posts.map((post) => (
          <div key={post.title}>
            <p>{post.title}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <MainContext.Provider
      value={{
        posts: posts,

        setPosts: setPosts,

        renderPosts: renderPosts,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};
