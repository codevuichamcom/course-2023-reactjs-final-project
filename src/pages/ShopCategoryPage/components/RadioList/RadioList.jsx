import React from "react";
import { Input } from "reactstrap";
import "./RadioList.css";

export const RadioList = ({ data }) => {
  return (
    <ul className="radio-list">
      {data.map((item, index) => (
        <li key={index} className="radio-list__item">
          <Input type="radio" id={item.id} name={item.type} className="me-3" />
          <label htmlFor={item.id}>
            {item.name}
            <span> ({item.quantity})</span>
          </label>
        </li>
      ))}
    </ul>
  );
};
