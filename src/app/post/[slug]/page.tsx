import AdjacentPostCard from "@/components/AdjacentPostCard";
import PostContent from "@/components/PostContent";
import { getPostData } from "@/service/posts";
import Image from "next/image";
import { FC } from "react";
interface PostPageProp {
  params: {
    slug: string;
  };
}

const Postpage: FC<PostPageProp> = async ({ params }) => {
  const { slug } = params;
  const post = await getPostData(slug);
  const { path, title, next, prev } = post;
  return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent {...post} />
      <section className="flex shadow-md">
        {prev && <AdjacentPostCard type="prev" post={post} />}
        {next && <AdjacentPostCard type="next" post={post} />}
      </section>
    </article>
  );
};
export default Postpage;
