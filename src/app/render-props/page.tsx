import { RenderProps } from "@/components/patterns/RenderProps/RenderProps";
import { getPosts, getUsers } from "@/services/JsonPlaceholderService";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Render Props | BookCatalog",
};

export default async function RenderPropsPage() {
  const postsData = await getPosts();
  const usersData = await getUsers();
  const posts = Array.isArray(postsData) ? postsData : postsData.posts;
  const users = Array.isArray(usersData) ? usersData : usersData.users;

  if (!Array.isArray(posts) || !Array.isArray(users)) {
    return notFound();
  }

  return (
    <div className="p-4 w-full mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Render Props Pattern
      </h1>
      <RenderProps posts={posts} users={users}>
        {({ posts, users }) => (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2>
                Posts: <span>({posts.length})</span>
              </h2>
              <div>
                {posts.slice(0, 5).map((p) => (
                  <div key={p.id}>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2>
                Users: <span>({users.length})</span>
              </h2>
              <div>
                {users.slice(0, 5).map((u) => (
                  <div key={u.id}>
                    <h3>{u.name}</h3>
                    <p>{u.email}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </RenderProps>
    </div>
  );
}
