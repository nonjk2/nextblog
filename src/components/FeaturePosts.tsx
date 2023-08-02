import { getFeaturedPost } from "@/service/posts";
import PostsGrid from "./PostsGrid";

const FeaturePosts = async () => {
  // 포스트 데이터를 읽어오기
  const posts = await getFeaturedPost();
  // 포스트 데이터를 뿌려주기
  return (
    <section className="my-4">
      <h2 className="text-2xl font-bold my-2">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};
export default FeaturePosts;
