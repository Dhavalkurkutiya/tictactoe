  // Game state
  let board = Array(3).fill(null).map(() => Array(3).fill(' '));
  let gameOver = false;
  let playerTurn = true; // Track whose turn it is

  // DOM elements
  const cells = document.querySelectorAll('.cell');
  const messageDiv = document.getElementById('message');
  const resetButton = document.getElementById('resetButton');

  // Check for winner
  function checkWinner(player) {
      // Check rows and columns
      for (let i = 0; i < 3; i++) {
          if ((board[i][0] === player && board[i][1] === player && board[i][2] === player) ||
              (board[0][i] === player && board[1][i] === player && board[2][i] === player)) {
              return true;
          }
      }
      // Check diagonals
      return (board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
             (board[0][2] === player && board[1][1] === player && board[2][0] === player);
  }

  // Check if board is full
  function isFull() {
      return board.every(row => row.every(cell => cell !== ' '));
  }

  // Minimax algorithm
  function minimax(depth, isMaximizing, alpha, beta) {
      if (checkWinner('O')) return 10 - depth;
      if (checkWinner('X')) return depth - 10;
      if (isFull()) return 0;

      if (isMaximizing) {
          let bestScore = -Infinity;
          for (let i = 0; i < 3; i++) {
              for (let j = 0; j < 3; j++) {
                  if (board[i][j] === ' ') {
                      board[i][j] = 'O';
                      const score = minimax(depth + 1, false, alpha, beta);
                      board[i][j] = ' ';
                      bestScore = Math.max(bestScore, score);
                      alpha = Math.max(alpha, bestScore);
                      if (beta <= alpha) return bestScore;
                  }
              }
          }
          return bestScore;
      } else {
          let bestScore = Infinity;
          for (let i = 0; i < 3; i++) {
              for (let j = 0; j < 3; j++) {
                  if (board[i][j] === ' ') {
                      board[i][j] = 'X';
                      const score = minimax(depth + 1, true, alpha, beta);
                      board[i][j] = ' ';
                      bestScore = Math.min(bestScore, score);
                      beta = Math.min(beta, bestScore);
                      if (beta <= alpha) return bestScore;
                  }
              }
          }
          return bestScore;
      }
  }

  // AI's best move
  function bestMove() {
      let bestScore = -Infinity;
      let move = { row: -1, col: -1 };

      for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
              if (board[i][j] === ' ') {
                  board[i][j] = 'O';
                  const score = minimax(0, false, -Infinity, Infinity);
                  board[i][j] = ' ';
                  if (score > bestScore) {
                      bestScore = score;
                      move = { row: i, col: j };
                  }
              }
          }
      }

      if (move.row !== -1) {
          board[move.row][move.col] = 'O';
          updateBoard();
      }
  }

  // Update the visual board
  function updateBoard() {
      cells.forEach(cell => {
          const row = parseInt(cell.dataset.row);
          const col = parseInt(cell.dataset.col);
          cell.textContent = board[row][col];
      });
  }

  // Handle player move
  function handleClick(row, col) {
      if (board[row][col] !== ' ' || gameOver || !playerTurn) return;

      board[row][col] = 'X';
      playerTurn = false;
      updateBoard();

      if (checkWinner('X')) {
          messageDiv.textContent = 'Congratulations! You win!';
          gameOver = true;
          return;
      }

      if (isFull()) {
          messageDiv.textContent = "It's a Draw!";
          gameOver = true;
          return;
      }

      // AI's turn
      setTimeout(() => {
          bestMove();
          playerTurn = true;
          
          if (checkWinner('O')) {
              messageDiv.textContent = 'AI wins! Better luck next time.';
              gameOver = true;
              return;
          }

          if (isFull()) {
              messageDiv.textContent = "It's a Draw!";
              gameOver = true;
          }
      }, 500);
  }

  // Reset game
  function resetGame() {
      board = Array(3).fill(null).map(() => Array(3).fill(' '));
      gameOver = false;
      playerTurn = true;
      messageDiv.textContent = '';
      updateBoard();
  }

  // Event listeners
  cells.forEach(cell => {
      cell.addEventListener('click', () => {
          const row = parseInt(cell.dataset.row);
          const col = parseInt(cell.dataset.col);
          handleClick(row, col);
      });
  });

  resetButton.addEventListener('click', resetGame);

  // Initialize the game
  updateBoard();