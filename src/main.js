const minesweeperContainer = document.getElementById('minesweeper-container');
    const resetButton = document.getElementById('reset-button');
    const gameOverMessage = document.getElementById('game-over-message');
    const gridSize = 10;
    const mineCount = 15;
    let grid = [];
    let gameOver = false;
    let firstClick = true;

    function createGrid(firstClickX, firstClickY) {
      grid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(0));
      let minesPlaced = 0;
      while (minesPlaced < mineCount) {
        const x = Math.floor(Math.random() * gridSize);
        const y = Math.floor(Math.random() * gridSize);
        if (grid[x][y] !== 'mine' && (x < firstClickX -1 || x > firstClickX + 1 || y < firstClickY - 1 || y > firstClickY + 1)) {
          grid[x][y] = 'mine';
          minesPlaced++;
        }
      }
      for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
          if (grid[x][y] !== 'mine') {
            let adjacentMines = 0;
            for (let dx = -1; dx <= 1; dx++) {
              for (let dy = -1; dy <= 1; dy++) {
                if (dx === 0 && dy === 0) continue;
                const nx = x + dx;
                const ny = y + dy;
                if (nx >= 0 && nx < gridSize && ny >= 0 && ny < gridSize && grid[nx][ny] === 'mine') {
                  adjacentMines++;
                }
              }
            }
            grid[x][y] = adjacentMines;
          }
        }
      }
    }

    function renderGrid() {
      minesweeperContainer.innerHTML = '';
      minesweeperContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
      for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
          const cell = document.createElement('div');
          cell.classList.add('cell');
          cell.dataset.x = x;
          cell.dataset.y = y;
          cell.addEventListener('click', handleCellClick);
          cell.addEventListener('contextmenu', handleCellRightClick);
          minesweeperContainer.appendChild(cell);
        }
      }
    }

    function handleCellClick(event) {
      if (gameOver) return;
      const cell = event.target;
      const x = parseInt(cell.dataset.x);
      const y = parseInt(cell.dataset.y);
      if (cell.classList.contains('revealed') || cell.classList.contains('flagged')) return;

      if (firstClick) {
        createGrid(x, y);
        firstClick = false;
      }
      revealCell(x, y);
    }

    function handleCellRightClick(event) {
      event.preventDefault();
      if (gameOver) return;
      const cell = event.target;
      if (cell.classList.contains('revealed')) return;
      cell.classList.toggle('flagged');
    }

    function revealCell(x, y) {
      if (x < 0 || x >= gridSize || y < 0 || y >= gridSize) return;
      const cell = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"]`);
      if (!cell || cell.classList.contains('revealed')) return;
      cell.classList.add('revealed');
      if (grid[x][y] === 'mine') {
        cell.classList.add('mine');
        cell.textContent = '💣';
        gameOver = true;
        revealAllMines();
        gameOverMessage.classList.remove('hidden');
        return;
      }
      if (grid[x][y] > 0) {
        cell.textContent = grid[x][y];
        return;
      }
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          if (dx === 0 && dy === 0) continue;
          revealCell(x + dx, y + dy);
        }
      }
    }

    function revealAllMines() {
      for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
          if (grid[x][y] === 'mine') {
            const cell = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"]`);
            cell.classList.add('mine');
            cell.textContent = '💣';
          }
        }
      }
    }

    function resetGame() {
      gameOver = false;
      firstClick = true;
      gameOverMessage.classList.add('hidden');
      createGrid(-1, -1);
      renderGrid();
    }

    resetButton.addEventListener('click', resetGame);
    resetGame();
