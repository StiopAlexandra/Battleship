import React from "react";
const Row = () => {
  const firstRow = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="row">
      {firstRow.map((row, rowIndex) => {
        return (
          <div className="square-text" key={`${rowIndex}`}>
            {row}
          </div>
        );
      })}
    </div>
  );
};
export default Row;
