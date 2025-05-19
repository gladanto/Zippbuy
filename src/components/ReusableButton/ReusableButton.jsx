import React from "react";
import "./ReusableButton.scss";

const ReusableButton = ({ label, onClick, className = "", ...rest }) => {
  return (
    <button
      onClick={onClick}
      className={`defaultBtn ${className}`}
      {...rest}
    >
      {label}
    </button>
  );
};

export default ReusableButton;
