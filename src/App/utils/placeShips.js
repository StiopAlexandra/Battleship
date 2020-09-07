export const isOccupied = ({ grid, shipCoords, rotated }) => {
  if (rotated) {
    for (let i = 0; i < shipCoords.length; i++) {
      if (grid[shipCoords[i][0]][shipCoords[i][1]].status === "occupied") {
        return null;
      }
    }
  } else {
    for (let i = 0; i < shipCoords.length; i++) {
      if (grid[shipCoords[i][0]][shipCoords[i][1]].status === "occupied") {
        return null;
      }
    }
  }
  return shipCoords;
};

export const getShipCoords = ({ row, col, length, rotated }) => {
  return Array(length)
    .fill([row, col])
    .map(([row, col], index) => {
      if (rotated) {
        if (row + length <= 10) {
          return [row + index, col];
        } else {
          return [10 - length + index, col];
        }
      } else {
        if (col + length <= 10) {
          return [row, col + index];
        } else {
          return [row, 10 - length + index];
        }
      }
    });
};
