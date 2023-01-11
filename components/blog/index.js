import PostsList from "./posts-list";
import Post from "./post";

const Blog = ({ posts, children }) => {
  return (
    <main>
      <h1 className="font-bold text-3xl m-auto text-center mt-10">
        From the blog
      </h1>
      <p className="m-auto text-center max-w-xl opacity-40 mb-10 mb-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
        labore natus atque, ducimus sed.{" "}
      </p>
      <PostsList>
        {posts.map(({ id, excerpt, slug, title, imageUrl, categories }) => (
          <Post
            key={id}
            excerpt={excerpt}
            slug={slug}
            title={title}
            imageUrl={imageUrl}
            categories={categories}
          />
        ))}
      </PostsList>
    </main>
  );
};

export default Blog;
