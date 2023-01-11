import PostsList from "./posts-list";
import Post from "./post";
import usePagination from "../../hooks/usePagination";
import PaginationContainer from "../pagination/PaginationContainer";
import PaginationButton from "../pagination/PaginationButton";

const Blog = ({ posts }) => {
  const { handlePageChange, page, totalPages } = usePagination();

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
      <PaginationContainer>
        <PaginationButton onClick={() => handlePageChange(-1)} disabled={page === 1}>
          Prev
        </PaginationButton>
        <PaginationButton onClick={() => handlePageChange(1)} disabled={page === totalPages}>
          Next
        </PaginationButton>
      </PaginationContainer>
    </main>
  );
};

export default Blog;
