import React from "react";
import Cell from "../Cell/Cell";

import "./Row.css";

const Row = ({ row, i, deleteRow }) => {
  return (
    <div className="container-data-input">
      <Cell />
      <Cell rowData={row.inc} />
      <Cell />
      <Cell />

      <div className="item-data data-del">
        <button onClick={i => deleteRow(i)} className="delete-btn">
          &#x2716;
        </button>
      </div>
    </div>
  );
};

export default Row;
