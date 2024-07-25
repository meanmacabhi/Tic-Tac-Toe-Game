

# Tic-Tac-Toe Game

A simple web-based Tic-Tac-Toe game built with HTML, CSS, and JavaScript.

## Demo

You can check out the live demo [here](https://your-username.github.io/tic-tac-toe).

## Features

- Two-player mode.
- Displays the winner or a draw.
- Option to start a new game or reset the current game.
- Responsive design for different screen sizes.

## Getting Started

To get started, clone the repository and open the `index.html` file in your web browser. No additional setup is required.

## How to Play

- Players take turns clicking on the boxes to place their marks (O for Player 1 and X for Player 2).
- The first player to get three marks in a row (horizontally, vertically, or diagonally) wins.
- If all nine boxes are filled and no player has three marks in a row, the game ends in a draw.
- Use the "NEW GAME" button to start a new game or the "RESET" button to clear the board and start over.

## Project Structure and Logic

### Files

- `index.html`: This file contains the HTML structure of the game, including the game grid and buttons for resetting or starting a new game.
- `tictactoe.css`: This file contains the CSS styles for the game, ensuring the layout is responsive and visually appealing.
- `tictactoe.js`: This file contains the JavaScript logic that makes the game interactive.

### JavaScript Logic

The game logic in `tictactoe.js` includes:

- **Event Listeners**: Attach click event listeners to each game box. When a box is clicked, it places the current player's mark (O or X), disables the box, and checks for a win or draw.
- **Turn Management**: Alternates turns between Player 1 (O) and Player 2 (X).
- **Win Checking**: Defines all possible win patterns (rows, columns, diagonals) and checks if any are met after each move.
- **Show Winner**: Displays a message announcing the winner and disables further moves.
- **Reset and New Game**: Functions to reset the game board, enabling all boxes and clearing any messages.

