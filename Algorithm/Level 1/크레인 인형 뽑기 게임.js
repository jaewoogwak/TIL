function solution(board, moves) {
  var box = [];
  var len = board.length;
  var count = 0;
  for (let i of moves) {
    for (let j = 0; j < len; j++) {
      if (board[j][i - 1] != 0) {
        box.push(board[j][i - 1]);
        board[j][i - 1] = 0;
        break;
      }
    }
    for (let j = 0; j < box.length - 1; j++) {
      if (box[j] == box[j + 1]) {
        count += 2;
        box.pop();
        box.pop();
      }
    }
  }

  var answer = count;
  return answer;
}
