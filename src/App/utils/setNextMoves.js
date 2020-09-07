export const setNextMoves = ({ row, col }) => {
  let nextMoves = [];
  if (row === 0) {
    if (col === 0)
      nextMoves.push(
        {
          row: row + 1,
          col: col,
          direction: "S",
        },
        {
          row: row,
          col: col + 1,
          direction: "E",
        }
      );
    if (col > 0 && col < 9)
      nextMoves.push(
        {
          row: row,
          col: col + 1,
          direction: "E",
        },
        {
          row: row + 1,
          col: col,
          direction: "S",
        },
        {
          row: row,
          col: col - 1,
          direction: "V",
        }
      );
    if (col === 9)
      nextMoves.push(
        {
          row: row + 1,
          col: col,
          direction: "S",
        },
        {
          row: row,
          col: col - 1,
          direction: "V",
        }
      );
  }
  if (row === 9) {
    if (col === 0)
      nextMoves.push(
        {
          row: row - 1,
          col: col,
          direction: "N",
        },
        {
          row: row,
          col: col + 1,
          direction: "E",
        }
      );
    if (col > 0 && col < 9)
      nextMoves.push(
        {
          row: row,
          col: col + 1,
          direction: "E",
        },
        {
          row: row - 1,
          col: col,
          direction: "N",
        },
        {
          row: row,
          col: col - 1,
          direction: "V",
        }
      );
    if (col === 9)
      nextMoves.push(
        {
          row: row - 1,
          col: col,
          direction: "N",
        },
        {
          row: row,
          col: col - 1,
          direction: "V",
        }
      );
  }
  if (row > 0 && row < 9) {
    if (col === 0)
      nextMoves.push(
        {
          row: row - 1,
          col: col,
          direction: "N",
        },
        {
          row: row,
          col: col + 1,
          direction: "E",
        },
        {
          row: row + 1,
          col: col,
          direction: "S",
        }
      );
    if (col > 0 && col < 9)
      nextMoves.push(
        {
          row: row - 1,
          col: col,
          direction: "N",
        },
        {
          row: row,
          col: col + 1,
          direction: "E",
        },
        {
          row: row + 1,
          col: col,
          direction: "S",
        },
        {
          row: row,
          col: col - 1,
          direction: "V",
        }
      );
    if (col === 9)
      nextMoves.push(
        {
          row: row - 1,
          col: col,
          direction: "N",
        },
        {
          row: row,
          col: col - 1,
          direction: "V",
        },
        {
          row: row + 1,
          col: col,
          direction: "S",
        }
      );
  }
  return nextMoves;
};
