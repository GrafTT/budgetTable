import React from "react";
import "./Cell.css";

const Cell = ({ rowData }) => {
  return (
    <div className="item-data-cell">
      <span className="ceil-text">{rowData}</span>

      <input className="ceil-input" type="text" autoFocus />

      <span className="icon-comment">&#x25b3;</span>
    </div>
  );
};

export default Cell;
