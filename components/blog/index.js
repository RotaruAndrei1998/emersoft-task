import PostsList from "./posts-list";
import Post from "./post";
import usePagination from "../../hooks/usePagination";
import PaginationContainer from "../pagination/PaginationContainer";
import PaginationButton from "../pagination/PaginationButton";
import FilterSection from "./post/filter-section";
import Filter from "./post/filter-section/Filter";
import Search from "./post/filter-section/Search";

const Blog = ({ posts, filterOptions }) => {
  const {
    handlePageChange,
    page,
    totalPages,
    handleFilterChange,
    categoryFilter,
    handleSearch,
  } = usePagination();

  return (
    <main>
      <h1 className="font-bold text-3xl m-auto text-center mt-10">
        From the blog
      </h1>
      <p className="m-auto text-center max-w-xl opacity-40 mb-10 mb-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
        labore natus atque, ducimus sed.{" "}
      </p>
      <FilterSection>
        <Search handleSearch={handleSearch} />
        <Filter
          filterOptions={filterOptions}
          handleFilterChange={handleFilterChange}
          categoryFilter={categoryFilter}
        />
      </FilterSection>
      {posts?.length > 0 ? (
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
      ) : (
        <div className="m-auto text-center">
          No results for this specific combination of query!
        </div>
      )}
      <PaginationContainer>
        <PaginationButton
          onClick={() => handlePageChange(-1)}
          disabled={page === 1 || totalPages === 0}
        >
          Prev
        </PaginationButton>
        <PaginationButton
          onClick={() => handlePageChange(1)}
          disabled={page === totalPages || totalPages === 0}
        >
          Next
        </PaginationButton>
      </PaginationContainer>
    </main>
  );
};

export default Blog;
