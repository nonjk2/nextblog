"use client";
import { Post } from "@/service/posts";
import { FC, useState } from "react";
import PostsGrid from "./PostsGrid";
import Categories from "./Categories";

interface FilterProps {
  posts: Post[];
  categories: string[];
}
const ALL_POSTS = "All Posts";

const FilterablePosts: FC<FilterProps> = (props) => {
  const { categories, posts } = props;
  const [selected, setselected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS ? posts : posts.filter((post) => post.category === selected);
  return (
    <section className="flex m-4">
      <PostsGrid posts={filtered} />
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setselected}
      />
    </section>
  );
};

export default FilterablePosts;
