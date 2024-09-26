import React from "react";

function Btn({ title, styles }) {
  return (
    <div className={`${styles} `}>
      <p>{title}</p>
    </div>
  );
}

export default Btn;
