import React from "react";
import { Input } from "reactstrap";

export const SelectBoxCustom = ({ data, onSelectBoxChange, ...args }) => {
  return (
    <Input
      {...args}
      type="select"
      onChange={(e) => {
        onSelectBoxChange(e.target.value);
      }}
    >
      <option value={0}>default</option>
      {data.map((item) => (
        <option key={item.key} value={item.key}>
          {item.value}
        </option>
      ))}
    </Input>
  );
};
