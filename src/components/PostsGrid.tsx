import { Post } from "@/service/posts";
import { FC } from "react";
import PostCard from "./PostCard";

interface PostsGridProps {
  posts: Post[];
}
const PostsGrid: FC<PostsGridProps> = ({ posts }) => {
  return (
    <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
      {posts.map((posts) => (
        <li key={posts.path}>
          <PostCard {...posts} />
        </li>
      ))}
    </ul>
  );
};
export default PostsGrid;
