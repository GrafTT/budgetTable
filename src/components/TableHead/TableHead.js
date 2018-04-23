import React from "react";
import "./TableHead.css";

const TableHead = ({ total }) => {
  return (
    <div className="container">
      <div className="item item-date">Дата</div>
      <div className="item item-inc">Доход</div>
      <div className="item item-exp">Расход</div>
      <div className="item item-rev">Прибыль</div>

      <div className="item exp-name exp1">Статья1</div>
      <div className="item exp-name exp2">Статья2</div>

      <div className="item inc-perc">%</div>
      <div className="item exp-perc1">%</div>
      <div className="item exp-perc2">%</div>
      <div className="item rev-perc">%</div>

      <div className="item inc-total">{total()}</div>
      <div className="item exp-total1">Всего </div>
      <div className="item exp-total2">Всего </div>
      <div className="item rev-total">Всего </div>
    </div>
  );
};

export default TableHead;
