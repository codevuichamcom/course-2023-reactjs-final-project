import React from "react";
import { Input } from "reactstrap";
import "./RadioList.css";

export const RadioList = ({ data, selected, handleSelected }) => {
  return (
    <ul className="radio-list">
      {data.map((item, index) => (
        <li key={index} className="radio-list__item">
          <Input
            type="radio"
            id={item.id}
            name={item.type}
            value={item.id}
            className="me-3"
            selected={selected === item.id}
            onChange={(e) => {
              handleSelected(parseInt(e.target.value));
            }}
          />
          <label htmlFor={item.id}>
            {item.name}
            <span> ({item.quantity})</span>
          </label>
        </li>
      ))}
    </ul>
  );
};
