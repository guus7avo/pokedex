import React from "react";
import { Paginationn, Button } from "./PaginationStyles";

const Pagination = (props) => {
  const { page, totalPages, onLeftClick, onRightClick } = props;
  return (
    <Paginationn>
      <Button onClick={onLeftClick}>◀</Button>
      <div>
        {page} de {totalPages}
      </div>
      <Button onClick={onRightClick}>▶</Button>
    </Paginationn>
  );
};

export default Pagination;
