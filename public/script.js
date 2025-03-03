let BOARD_SIZE = 15
let board;

document.getElementById("new-game-btn").addEventListener("click", startGame)

function getCell(board, x, y) {
    return board[y][x];
}

function startGame(){
    document.getElementById("intro-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "block";
    

    board = generateRandomBoard()

    drawBoard(board);

    console.log("Klikattu")
}

function generateRandomBoard(){
    const newBoard = Array.from({length: BOARD_SIZE }, () =>Array(BOARD_SIZE).fill(""));

  for ( let y = 0; y < BOARD_SIZE; y++){
    for (let x = 0; x < BOARD_SIZE; x++){
       if (y === 0 || y === BOARD_SIZE - 1 || x === BOARD_SIZE - 1){
            newBoard [y][x] = "W";
       }
    }
  }
  console.log("newBoard")
  return newBoard;
}

function drawBoard(board) {
    const gameBoard = document.getElementById("game-board")
    gameBoard.style.gridTemplateColumns = `repeat(${BOARD_SIZE}, 1fr)`;
    
    for (let y = 0; y < BOARD_SIZE; y++) { // Käydään läpi pelikentän rivit

        for (let x = 0; x < BOARD_SIZE; x++) { // Käydään läpi jokaisen rivin sarakkeet

            const cell = document.createElement('div'); // Luodaan uusi HTML-elementti (div), joka edustaa yhtä pelikentän ruutua
            cell.classList.add('cell'); // Lisätään ruudulle perusluokka "cell", joka muotoilee ruudun CSS:llä
            if (getCell(board, x, y) === "W"){
                cell.classList.add("wall");

            }
            gameBoard.appendChild(cell);
        }
    }
}