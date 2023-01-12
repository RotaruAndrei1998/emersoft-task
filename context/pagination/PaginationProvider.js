import PaginationContext from "./PaginationContext";
import { useEffect, useState } from "react";

const PaginationProvider = ({
  children,
  initialPosts,
  searchParams = {},
  initialTotalPages,
}) => {
  const { page, pageSize, q, categoryFilter } = searchParams;
  const [paginationState, setPaginationState] = useState({
    page,
    pageSize,
    q,
    categoryFilter,
  });

  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const [posts, setPosts] = useState(initialPosts);

  useEffect(() => {
    const controller = new AbortController();

    let _paginationState = {};
    Object.entries(paginationState).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        if (value?.length > 0) {
          _paginationState[key] = value?.map((filter) => filter?.id);
        }
      } else if (!!value) {
        _paginationState[key] = value;
      }
    });

    const searchParams = new URLSearchParams(_paginationState);
    const handleGetPosts = async () => {
      const result = await fetch(`/api/blog/getPosts?${searchParams}`);
      const data = await result.json();
      const { posts, totalPages } = data;
      setPosts(posts || []);
      setTotalPages(totalPages);
    };

    try {
      handleGetPosts();
    } catch (e) {
      console.error("Something wrong happened: ", e);
    }
    return () => controller.abort();
  }, [paginationState]);

  return (
    <PaginationContext.Provider
      value={{ paginationState, setPaginationState, totalPages }}
    >
      {children(posts)}
    </PaginationContext.Provider>
  );
};

export default PaginationProvider;
