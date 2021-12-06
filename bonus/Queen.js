const generateBoard = (whiteQueen, blackQueen) => {
  let board = [];
  let temp = [];
  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      temp.push('0');
      if (whiteQueen[0] === row) {
        if (whiteQueen[1] === column) {
          temp.pop();
          temp.push('1');
        }
      } else if (blackQueen[0] === row) {
        if (blackQueen[1] === column) {
          temp.pop();
          temp.push('1');
        }
      }
    }
    board.push(temp);
    temp = [];
  }
  return board;
};
const queenThreat = (board) => {
  let result = false;
  const FirstQueen = (board) => {
    for (let i = 0; (i) < board.length; (i)++) {
      for (let j = 0; j < board.length; j++) {
        if (board[i][j] === '1') {
          return ([i,j]);
        }
      }
    }
  };
  let chess = FirstQueen(board);
  let x = whiteQueen[0];
  let y = whiteQueen[1];

  const vertical = () => {
    for (let i = 0; i < 8; i++) {
      board[x][i] = 'q';
      if (board[x][i] === '1' && i !== y) {
        board[x][i] = 'q';
        return result = true;
      }
    }
  };

  const horizontal = () => {
    for (let i = 0; i < board.length; i ++) {
      board[i][y] = 'q';
      if (board[i][y] === '1' && i !== x) {
        board[i][y] = 'q';
        return result = true;
      }
    }
  };

  const crossForward = () => {
    let initialx = x;
    let initialy = y;
    for (initialx; 0 < initialx  && initialy > 0; initialx--, initialy--) {
      board[initialx][initialy] = 'Q';
      if (board[initialx][initialy] === 1 && initialx !== x && initialy !== y) {
        board[initialx][initialy] = 'Q';
        result = true;
        return result;
      }
    }
    for (initialx, initialy; initialx < 8 && initialy < 8; initialx++, initialy++) {
      board[initialx][initialy] = 'Q';
      if (board[initialx][initialy] === 1 && initialx !== x && initialy !== y) {
        board[initialx][initialy] = 'Q';
        result = true;
        return result;
      }
    }
  };
  const corssReverse = () => {
    let initialx = x;
    let initialy = y;
    for (initialx; 7 > initialx && initialy > 0; initialx++, initialy--) {
      board[initialx][initialy] = 'Q';
      if (board[initialx][initialy] === 1 && initialx !== x && initialy !== y) {
        board[initialx][initialy] = 'Q';
        result = true;
        return result;
      }
    }
    for (initialx, initialy; 0 < initialx && initialy > 8; initialx--, initialy++) {
      board[initialx][initialy] = 'Q';
      if (board[initialx][initialy] === '1' && initialx !== x && initialy !== y) {
        board[initialx][initialy] = 'Q';
        return result = true;
      }
    }
  };
  vertical(board);
  horizontal(board);
  crossForward(board);
  corssReverse(board);
  if (result === true) {
    return result;
  }
  return result;
};
