import React from "react";
import "./Buttons.css";

const Buttons = ({ addRow }) => {
  return (
    <div className="btn-group">
      <button onClick={addRow} className="add-btn">
        + Добавить строку
      </button>
      <button className="save-btn">Сохранить</button>
    </div>
  );
};

export default Buttons;
