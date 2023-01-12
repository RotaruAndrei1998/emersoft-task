import { useContext } from "react";
import PaginationContext from "../context/pagination/PaginationContext";

const usePagination = () => {
  const { paginationState, setPaginationState, totalPages } =
    useContext(PaginationContext);
  const { page, categoryFilter } = paginationState;

  const handlePageChange = (value) => {
    if (value === -1 && page - 1 > 0) {
      setPaginationState((paginationState) => ({
        ...paginationState,
        page: paginationState?.page - 1,
      }));
    } else if (value === 1 && page + 1 <= totalPages) {
      setPaginationState((paginationState) => ({
        ...paginationState,
        page: paginationState?.page + 1,
      }));
    }
  };

  const handleFilterChange = (value) => {
    setPaginationState((paginationState) => ({
      ...paginationState,
      categoryFilter: value,
      page: 1,
    }));
  };

  const handleSearch = (value) => {
    setPaginationState((paginationState) => ({
      ...paginationState,
      q: value,
      page: 1,
    }));
  };
  return {
    handlePageChange,
    page,
    totalPages,
    handleFilterChange,
    categoryFilter,
    handleSearch
  };
};

export default usePagination;
