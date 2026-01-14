"use client";

import { IPosts, IUsers } from "@/types/JsonPlaceholder";
import { RenderDataProvider } from "../RenderDataProvider";
import { Posts } from "./Posts";
import { Users } from "./Users";

export const Example1 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <RenderDataProvider<IPosts[]>
        url={"https://jsonplaceholder.typicode.com/posts"}
        render={({ data: posts, error, loading }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error: {error}</div>;
          if (!posts || posts.length === 0) return <div>No posts found</div>;

          return <Posts posts={posts} />;
        }}
      />
      <RenderDataProvider<IUsers[]>
        url={"https://jsonplaceholder.typicode.com/users"}
        render={({ data: users, error, loading }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error: {error}</div>;
          if (!users || users.length === 0) return <div>No users found</div>;

          return <Users users={users} />;
        }}
      />
    </div>
  );
};
