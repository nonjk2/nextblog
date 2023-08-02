import { getNonFeaturedPost } from "@/service/posts";
import PostCard from "./PostCard";
import MultiCaruocel from "./MultiCaruocel";

const CaroucelPost = async () => {
  const posts = await getNonFeaturedPost();
  return (
    <section className="my-4">
      <h2 className="text-2xl font-bold my-2">You May Like</h2>
      <MultiCaruocel>
        {posts.map((post) => (
          <PostCard key={post.path} {...post} />
        ))}
      </MultiCaruocel>
    </section>
  );
};
export default CaroucelPost;
