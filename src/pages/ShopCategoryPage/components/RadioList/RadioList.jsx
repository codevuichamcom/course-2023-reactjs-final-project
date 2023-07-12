import React from "react";
import { Input } from "reactstrap";
import "./RadioList.css";

export const RadioList = ({ data }) => {
  return (
    <ul className="radio-list">
      {data.map((item) => (
        <li className="radio-list__item">
          <Input type="radio" id={item.id} name={item.type} className="me-3" />
          <label for={item.id}>
            {item.categoryName}
            <span> ({item.quantity})</span>
          </label>
        </li>
      ))}
    </ul>
  );
};
