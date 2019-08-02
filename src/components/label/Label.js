import React from "react";

const Label = props => {
  return (
    <label className="col-sm-2 col-form-label" htmlFor="demo">
      {props.labelValue}:
    </label>
  );
};
export default Label;
