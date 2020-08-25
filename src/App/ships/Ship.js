import React from "react";

const Ship = ({ ship }) => {
  return (
    <div
      style={{
        backgroundColor: "lightGray",
        width: `${ship.size * 20}px`,
        height: "20px",
        border: "1px solid gray",
        marginBottom: "10px",
      }}
    >
      {" "}
    </div>
  );
};

export default Ship;
