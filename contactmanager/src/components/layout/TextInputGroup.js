import React from "react";
import PropTypes from "prop-types";

const textInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange
}) => {
  return (
    <div className="field">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input
        type={type}
        className="input"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

textInputGroup.PropTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

textInputGroup.defaultProps = {
  type: "text"
};

export default textInputGroup;
