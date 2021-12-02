import React, {useState} from "react";

const FormInput = ({
  placeholder,
  label, 
  handleChange,
  type,
  name,
  id,
  error,
  value,
  setFieldValue
}) => {
  const _handleChange = (e) => {
    if (setFieldValue) {
      setFieldValue(id, e)
      return
    }
  }

  return (
    <div className="form__input">
      <div className="form__input-label">{label}</div>
      <input
        placeholder={placeholder}
        onChange={_handleChange}
        type={type}
        name={name}
        value={value}
      /> 
    </div>
  );
};

export default FormInput;
