import { useState } from "react";
import usePagination from "../hooks/usePagination";

function PaginationDemo() {
  const [items, setItems] = useState(
    Array.from({ length: 100 }, (_, i) => "Item " + (i + 1)),
  );

  const [itemsPerPage, setItemsPerPage] = useState(10);
  
  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPage,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
  } = usePagination(items.length, itemsPerPage);

  // TODO: map over the currentItems and show each item in the jsx
 const currentItems = items.slice(startIndex, endIndex);

 // TODO: 


  return (
    <div>
      <h2>Pagination Demo</h2>
      <div>
        <select
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>

        <div>Total Items: {items.length}</div>
      </div>

      <div>
        {/* map over the currentItems and show each item here*/}
      </div>
    </div>
  );
}

export default PaginationDemo;
