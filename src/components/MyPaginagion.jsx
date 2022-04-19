import { Button, Pagination } from "@mui/material";
import React, { useContext } from "react";
import { clientContext } from "../context/ClientContext";

const MyPaginagion = () => {
  const data = useContext(clientContext);
  const { totalCount, productsPerPage, handlePagination } = data;
  const totalPages = Math.ceil(totalCount / productsPerPage);
  return (
    <div className="my-pagination">
      {/* <Pagination
        onChange={(_, page) => handlePagination(page)}
        count={totalPages}
        color="primary"
      /> */}
      <Button variant="outlined" onClick={handlePagination}>
        Показать ещё
      </Button>
    </div>
  );
};

export default MyPaginagion;
