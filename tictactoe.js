const container = document.querySelector('.js-container');
container.addEventListener('click', containerAreaClicked);

function resetGame() {
  const board = new Array(20).fill(null).map(
    () => new Array(20).fill(null)
  );
  let nextMoveSymbol = 'X';

  return [board, nextMoveSymbol];
}

let [board, nextMoveSymbol] = resetGame();



function getMove() {
  return null;
}

function containerAreaClicked(event) {
  let dataset = event.target.dataset;
  if (typeof dataset.row === 'undefined' || typeof dataset.col === 'undefined') {
    return;
  }
  const {row, col} = dataset;
  if (board[row][col] === null) {
   
    board[row][col] = nextMoveSymbol;
    nextMoveSymbol = nextMoveSymbol === 'X' ? 'O' : 'X';
    renderBoard();
  }
 
}

function renderRow(rowData, rowIndex) {
  let rowHTML = '<tr class="tictactoe-row">';
  for (let i=0; i<rowData.length; i++) {
    let cell = rowData[i];
    let columnIndex = i;
    rowHTML += 
    `<td 
    class="tictactoe-cell" 
    data-row="${rowIndex}" 
    data-col="${columnIndex}">

        ${cell ?? ''}

    </td>`
  }
  
  rowHTML += '</tr>';
  return rowHTML;
}


function renderBoard() {
  let html = '<table class="tictactoe-board"><tbody>';

  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    html += renderRow(row, i);
  }

  html += '</tbody></table>';
  container.innerHTML = html;
}
renderBoard();
document.querySelector('.js-newGame').addEventListener('click', () => {[board, nextMoveSymbol] = resetGame();
    renderBoard();
  });