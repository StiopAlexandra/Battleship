import React from "react";
const Col = () => {
  const firstCol = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  return (
    <div className="col">
      {firstCol.map((col, colIndex) => {
        return (
          <div className="square-text" key={`${colIndex}`}>
            {col}
          </div>
        );
      })}
    </div>
  );
};
export default Col;
