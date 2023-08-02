import React from "react";
import { Input } from "reactstrap";

export const SelectBoxCustom = ({
  data,
  selected,
  handleSelected,
  ...args
}) => {
  return (
    <Input
      {...args}
      type="select"
      onChange={(e) => {
        handleSelected(e.target.value);
      }}
    >
      <option value={0}>default</option>
      {data.map((item) => (
        <option
          key={item.key}
          value={item.key}
          selected={selected === item.key}
        >
          {item.value}
        </option>
      ))}
    </Input>
  );
};
