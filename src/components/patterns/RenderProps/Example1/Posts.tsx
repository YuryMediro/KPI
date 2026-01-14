import { IPosts } from "@/types/JsonPlaceholder";

interface PostsProps {
  posts: IPosts[];
}

export const Posts = ({ posts }: PostsProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">
        Posts: ({posts.length})
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
  );
};
