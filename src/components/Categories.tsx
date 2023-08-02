import { FC } from "react";

interface CategoryProps {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
}

const Categories: FC<CategoryProps> = (props) => {
  const { categories, onClick, selected } = props;
  return (
    <section className="text-center p-4">
      <h2 className="text-lg font-bold border-b border-sky-500 m-2">Category</h2>
      <ul>
        {categories.map((category) => (
          <li
            className={`cursor-pointer hover:text-sky-500 ${
              category === selected && "text-sky-600"
            }`}
            key={category}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Categories;
