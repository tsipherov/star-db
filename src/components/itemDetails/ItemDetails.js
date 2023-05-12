import React, { useEffect, useState } from "react";

import "./ItemDetails.css";
import { useParams } from "react-router-dom";

const ItemDetails = ({ getData, renderData }) => {
  const [itemObj, setItemObj] = useState(null);
  const { ["*"]: id } = useParams();

  useEffect(() => {
    if (id) updateDetails(id);
  }, [id]);

  const updateDetails = (id) => {
    getData(id).then((itemObj) => {
      setItemObj(itemObj);
    });
  };

  const renderProperties = (data) => {
    return data.map((prop) => {
      return (
        <li className="list-group-item" key={prop}>
          <span className="term">{prop}</span>
          <span>{itemObj[prop]}</span>
        </li>
      );
    });
  };

  if (!itemObj) {
    return <span>Select an item from a list</span>;
  }
  const { name, image } = itemObj;
  return (
    <div className="person-details card">
      <img className="person-image" alt={name} src={image} />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {renderProperties(renderData)}
        </ul>
      </div>
    </div>
  );
};

export default ItemDetails;
