import React from "react";
import { TextElementI } from "../../interface";

const SelectElement: React.FC<TextElementI> = (props) => {
  const {
    id,
    labelClassName,
    labelName,
    inputClassName,
    value,
    onChange,
    options,
    name,
  } = props;
  return (
    <React.Fragment>
      <label htmlFor={id} className={labelClassName}>
        {labelName}
      </label>
      <select
        id={id}
        className={inputClassName}
        value={value}
        onChange={onChange}
        name={name}
      >
        {Object.keys(options).map((key) => (
          <option key={key} value={options[key]}>
            {options[key]}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
};

export default SelectElement;
