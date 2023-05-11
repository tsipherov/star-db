import React from "react";
import "./ItemList.css";

const ItemList = ({ data, labelRender, onClickHandler }) => {
  const renderItems = (arr) => {
    return arr.map((item) => {
      const { id } = item;
      const label = labelRender(item);
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => onClickHandler(id)}
        >
          {label}
        </li>
      );
    });
  };

  return (
    <ul className="item-list list-group">{data ? renderItems(data) : null}</ul>
  );
};

export default ItemList;
