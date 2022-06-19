import React from "react";

const Input = ({label,type}) => {
  return (
    <div className="col-md-12">
      <label htmlFor="validationCustom01" className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id="validationCustom01"
        required
      />
      <div className="valid-feedback">Looks good!</div>
    </div>
  );
};

export default Input;
