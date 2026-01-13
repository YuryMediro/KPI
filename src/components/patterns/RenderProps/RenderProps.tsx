import { IPosts, IUsers } from "@/types/JsonPlaceholder";
import { ReactNode } from "react";

interface RenderPropsProps {
  posts: IPosts[];
  users: IUsers[];
  children: (prop: { posts: IPosts[]; users: IUsers[] }) => ReactNode;
}

export const RenderProps = ({ children, posts, users }: RenderPropsProps) => {
  return children({ posts, users });
};
