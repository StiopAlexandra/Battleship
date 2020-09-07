export const yourClass = (square) => {
  let classes = "grid-square ";
  if (square.status === "occupied" && square.hover) {
    classes += "active-occupied";
  } else if (square.hover) {
    classes += "active";
  } else if (square.status === "occupied") {
    classes += "occupied";
  } else if (square.status === "hit") {
    classes += "hit";
  } else if (square.status === "sunk") {
    classes += "sunk";
  } else if (square.status === "miss") {
    classes += "miss";
  }
  return classes;
};

export const enemyClass = (square) => {
  let classes = "grid-square ";
  //   if (square.status === "occupied") {
  //     classes += "occupied";
  //   } else
  if (square.status === "hit") {
    classes += "hit";
  } else if (square.status === "sunk") {
    classes += "sunk";
  } else if (square.status === "miss") {
    classes += "miss";
  }
  return classes;
};
