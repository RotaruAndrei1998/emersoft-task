import CategorySection from "./CategorySection";
import AuthorSection from "./AuthorSection";

const Post = ({ id, excerpt, slug, title, imageUrl, categories }) => {
  return (
    <div className="max-w-[400px] shadow-2xl rounded-2xl border-solid border overflow-hidden flex flex-col">
      <div>
        <img src={imageUrl} className="w-full h-[200px] object-cover" />
      </div>
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <CategorySection categories={categories} />
          <h1 className="my-2.5 font-bold text-2xl">{title}</h1>
          <div>{excerpt}</div>
        </div>
          <AuthorSection />
      </div>
    </div>
  );
};

export default Post;
