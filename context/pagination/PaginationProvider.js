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

    const searchParams = new URLSearchParams(paginationState);

    fetch(`/api/blog/getPosts?${searchParams}`)
      .then((res) =>
        res.json().then((data) => {
          setPosts(data?.posts);
          setTotalPages(data?.totalPages);
        })
      )
      .catch((e) => console.log(e, controller.signal.aborted));

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
