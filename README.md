# 🎮 Tic-Tac-Toe Game

A modern, interactive Tic-Tac-Toe game where you play against an unbeatable AI opponent. Built with pure HTML, CSS, and JavaScript.

## 🎯 Features

- **Smart AI Opponent**: Uses the minimax algorithm with alpha-beta pruning for optimal gameplay
- **Clean UI**: Modern glassmorphism design with smooth animations
- **Responsive Design**: Works on all devices and screen sizes
- **Turn-based Gameplay**: Clear indication of player and AI turns
- **Game State Management**: Tracks wins, draws, and game progress
- **No Dependencies**: Pure vanilla JavaScript implementation

## 🚀 Quick Start

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tic-tac-toe.git
```

2. Open `index.html` in your web browser

That's it! No build process or dependencies required.

## 🎲 How to Play

1. You play as **X**, the AI plays as **O**
2. Click any empty cell to make your move
3. The AI will automatically respond
4. Win by getting three in a row (horizontally, vertically, or diagonally)
5. Click "New Game" to start over

## 💻 Technical Details

### Project Structure
```
tic-tac-toe/
├── index.html      # Game interface
├── style.css       # Styling and animations
├── main.js         # Game logic and AI
└── README.md       # Documentation
```

### Key Components

- **Game Board**: 3x3 grid implemented with HTML buttons
- **AI Logic**: Minimax algorithm with alpha-beta pruning
- **State Management**: Tracks board state, game progress, and player turns
- **UI Updates**: Real-time board updates and game status messages

### AI Implementation

The AI uses the minimax algorithm with alpha-beta pruning to make optimal moves:
- Evaluates all possible moves
- Uses depth to prefer winning in fewer moves
- Implements alpha-beta pruning for efficiency
- Always makes the best possible move

## 🎨 UI Features

- Modern glassmorphism design
- Smooth hover animations
- Responsive layout
- Clear game status messages
- Disabled cells after game over
- Visual feedback for player moves

## 🛠️ Development

The game is built with:
- HTML5
- CSS3 (with modern features like flexbox and grid)
- Vanilla JavaScript (ES6+)

## 🤝 Contributing

Feel free to contribute to this project:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Minimax algorithm implementation inspired by classic game theory
- UI design inspired by modern web design trends

---

Made with ❤️ by [Your Name]
