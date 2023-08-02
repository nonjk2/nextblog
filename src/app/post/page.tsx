import FilterablePosts from "@/components/FilterablePosts";
import { getAllPosts } from "@/service/posts";

const PostPage = async () => {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return <FilterablePosts categories={categories} posts={posts} />;
};
export default PostPage;
