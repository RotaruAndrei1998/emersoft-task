import { createContext } from "react";

const PaginationContext = createContext({ page: 1, pageSize: 3, categoryFilter: [] });

export default PaginationContext;
