import { useState, useEffect } from "react";

const NumberLimit = ({
  className,
  autoFocus,
  other,
  maxLength,
  values,
  name,
  setvalues,
  placeholder,
  id,
  inputStyle,
  style,
}) => {
  const [value, setValue] = useState(values?.[name] || "");

  useEffect(() => {
    if (values?.[name] !== undefined) {
      setValue(values[name]);
    }
  }, [values, name]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    const inputValue = event.target.value;
    if (inputValue.length <= maxLength) {
      setValue(inputValue);
      setvalues((prevValues) => ({ ...prevValues, [name]: inputValue }));
    }
  };

  return (
    <input
      id={id}
      type="number"
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={other || placeholder}
      className={`${className} ${inputStyle}`}
      style={style}
      onKeyDown={handleKeyDown}
      autoFocus={autoFocus}
    />
  );
};

export default NumberLimit;
