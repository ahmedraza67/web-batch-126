import React from "react";

function Button({ text, bgColor }) {
  //   let name = "ahmed";

  return (
    <button
      style={{
        padding: "10px",
        backgroundColor: bgColor,
        border: "none",
        borderRadius: "10px",
      }}
    >
      {text}
    </button>
  );
}

export default Button;
