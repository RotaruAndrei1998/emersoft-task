const Post = ({ id, excerpt, slug, title, imageUrl, categories }) => {
  return (
    <div className="max-w-[400px] shadow-2xl rounded-2xl border-solid border overflow-hidden flex flex-col">
      <div>
        <img src={imageUrl} className="w-full h-[200px] object-cover" />
      </div>
      <div className="p-5 flex flex-col justify-between flex-grow">
          <div>
        <button className="text-blue-700 font-semibold">{categories[0]}</button>
        <h1 className="my-2.5 font-bold text-2xl">{title}</h1>
        <div>{excerpt}</div>
          </div>
        <div className="mt-10">author section</div>
      </div>
    </div>
  );
};

export default Post;
