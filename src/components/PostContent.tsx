import { AiTwotoneCalendar } from "react-icons/ai";
import MarkdownViewer from "./MarkdownViewer";
import { FC } from "react";
import { PostData } from "@/service/posts";

const PostContent: FC<PostData> = (post) => {
  const { content, date, description, title } = post;
  return (
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
  );
};
export default PostContent;
