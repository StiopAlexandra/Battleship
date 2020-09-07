export const setNextMoves = ({ row, col }) => {
  let nextMoves = [];
  if (row === 0) {
    if (col === 0)
      nextMoves.push(
        {
          row: row + 1,
          col: col,
        },
        {
          row: row,
          col: col + 1,
        }
      );
    if (col > 0 && col < 9)
      nextMoves.push(
        {
          row: row,
          col: col + 1,
        },
        {
          row: row + 1,
          col: col,
        },
        {
          row: row,
          col: col - 1,
        }
      );
    if (col === 9)
      nextMoves.push(
        {
          row: row + 1,
          col: col,
        },
        {
          row: row,
          col: col - 1,
        }
      );
  }
  if (row === 9) {
    if (col === 0)
      nextMoves.push(
        {
          row: row - 1,
          col: col,
        },
        {
          row: row,
          col: col + 1,
        }
      );
    if (col > 0 && col < 9)
      nextMoves.push(
        {
          row: row,
          col: col + 1,
        },
        {
          row: row - 1,
          col: col,
        },
        {
          row: row,
          col: col - 1,
        }
      );
    if (col === 9)
      nextMoves.push(
        {
          row: row - 1,
          col: col,
        },
        {
          row: row,
          col: col - 1,
        }
      );
  }
  if (row > 0 && row < 9) {
    if (col === 0)
      nextMoves.push(
        {
          row: row - 1,
          col: col,
        },
        {
          row: row,
          col: col + 1,
        },
        {
          row: row + 1,
          col: col,
        }
      );
    if (col > 0 && col < 9)
      nextMoves.push(
        {
          row: row - 1,
          col: col,
        },
        {
          row: row,
          col: col + 1,
        },
        {
          row: row + 1,
          col: col,
        },
        {
          row: row,
          col: col - 1,
        }
      );
    if (col === 9)
      nextMoves.push(
        {
          row: row - 1,
          col: col,
        },
        {
          row: row,
          col: col - 1,
        },
        {
          row: row + 1,
          col: col,
        }
      );
  }
  return nextMoves;
};
