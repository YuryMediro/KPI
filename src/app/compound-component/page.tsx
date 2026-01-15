import { getPosts, getUsers } from "@/services/JsonPlaceholderService";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CompoundComponent } from "@/components/patterns/CompoundComponent/CompoundComponent";

export const metadata: Metadata = {
  title: "Compound Components | BookCatalog",
};

export default async function CompoundComponentsPage() {
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
        Compound Component Pattern
      </h1>
      <CompoundComponent posts={posts} users={users} />
    </div>
  );
}
