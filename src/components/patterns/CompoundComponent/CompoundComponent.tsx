import { IPosts, IUsers } from "@/types/JsonPlaceholder";
import { Tabs } from ".";

interface CompoundComponentProps {
  posts: IPosts[];
  users: IUsers[];
}
// Compound Components (Составные компоненты) — это паттерн проектирования в React, где группа компонентов работает вместе как единое целое, разделяя состояние и логику через контекст (Context API), но предоставляя гибкий API для пользователя.
export const CompoundComponent = ({ posts, users }: CompoundComponentProps) => {
  return (
    <Tabs defaultActiveKey="posts">
      <Tabs.List>
        <Tabs.Trigger value="posts">Posts ({posts.length})</Tabs.Trigger>
        <Tabs.Trigger value="users">Users ({users.length})</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value={"posts"}>
        <div>
          {posts.slice(0, 5).map((post) => (
            <div key={post.id} >
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </Tabs.Content>
      <Tabs.Content value={"users"}>
        <div>
          {users.slice(0, 5).map((user) => (
            <div key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.username}</p>
            </div>
          ))}
        </div>
      </Tabs.Content>
    </Tabs>
  );
};
