export const isSunk = ({ ship }) => {
  let nr = 0;
  for (let i = 0; i < ship.size; i++) {
    if (ship.positions[i].hit) nr++;
  }
  if (nr === ship.size) return true;
  return false;
};
