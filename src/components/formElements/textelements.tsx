import React from "react";

interface TextElementI {
  id: string;
  labelClassName: string;
  htmlFor: string;
  labelName: string;
  type: string;
  inputClassName: string;
  value: any;
  onChange: (e: any) => void;
  disabled?: boolean;
  name: string;
}

const TextElement: React.FC<TextElementI> = (props) => {
  const {
    id,
    labelClassName,
    labelName,
    type,
    inputClassName,
    value,
    onChange,
    disabled = false,
    name,
  } = props;
  return (
    <React.Fragment>
      <label htmlFor={id} className={labelClassName}>
        {labelName}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className={inputClassName}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </React.Fragment>
  );
};

export default TextElement;
