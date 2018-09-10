import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const textInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error
}) => {
  return (
    <div className="field">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input
        type={type}
        className={classnames("input", { "is-danger": error })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && (
        <article className="message is-small is-danger">
          <div className="message-body">{error}</div>
        </article>
      )}
    </div>
  );
};

textInputGroup.PropTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

textInputGroup.defaultProps = {
  type: "text"
};

export default textInputGroup;
