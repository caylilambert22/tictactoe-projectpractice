const container = document.querySelector('.js-container');

// generate numbers and rows into console window
function getMove() {
  const value = Math.random();
  return (
    value < 0.2 ? 'X' :
    value < 0.4 ? 'O' :
    null
  )
}

const board = new Array(20).fill(null).map(
  () => new Array(20).fill(null).map(getMove)
);



//render board

function renderRow(rowData) {
  let rowHTML = '<tr class="tictactoe-row">';
  for (let cell of rowData) {
    rowHTML += `<td class="tictactoe-cell">${cell ?? ''}</td>`
  }
  
  rowHTML += '</tr>';
  return rowHTML;
}


function renderBoard(board) {
  let html = '<table class="tictactoe-board"><tbody>';

  for (let row of board) {
    html += renderRow(row);
  }

  html += '</tbody></table>';
  return html;
}




let html = renderBoard(board);

container.innerHTML = html;