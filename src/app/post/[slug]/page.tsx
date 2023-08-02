import MarkdownViewer from "@/components/MarkdownViewer";
import { getPostData } from "@/service/posts";
import Image from "next/image";
import { FC } from "react";
import { AiTwotoneCalendar } from "react-icons/ai";
interface PostPageProp {
  params: {
    slug: string;
  };
}

const Postpage: FC<PostPageProp> = async ({ params }) => {
  const { slug } = params;
  const { title, content, date, description, path } = await getPostData(slug);
  return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <section className="flex flex-col p-4">
        <div className="flex items-center self-end text-sky-600">
          <AiTwotoneCalendar />
          <p className="font-semibold ml-2">{date.toString()}</p>
        </div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <h1 className="text-xl font-bold">{description}</h1>
        <div className="w-44 border-2 border-sky-600 mt-4 mb-8"></div>
        <MarkdownViewer content={content} />
      </section>
    </article>
  );
};
export default Postpage;
