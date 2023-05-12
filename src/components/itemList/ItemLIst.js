import React from "react";
import "./ItemList.css";
import { Link } from "react-router-dom";

const ItemList = ({ data, labelRender }) => {
  const renderItems = (arr) => {
    return arr.map((item) => {
      const { id } = item;
      const label = labelRender(item);
      return (
        <Link to={id} className="list-group-item" key={id}>
          {label}
        </Link>
      );
    });
  };

  return (
    <ul className="item-list list-group">{data ? renderItems(data) : null}</ul>
  );
};

export default ItemList;
