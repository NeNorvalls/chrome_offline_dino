# Chrome Dinosaur Game
[view here](https://nenorvalls.github.io/chrome_offline_dino/)

This project is a dynamic recreation of the Chrome Dinosaur Game, implemented using HTML5 Canvas, JavaScript, and CSS. The game is a fun and interactive experience where a dinosaur avoids incoming cacti by jumping.

## Features
- **Dynamic Gameplay**: The game dynamically places cacti with randomized types and positions.
- **Collision Detection**: Real-time collision detection between the dinosaur and cacti.
- **Scoring System**: A live score tracker to keep track of your progress.
- **Game Restart**: A restart button to reset the game and play again.
- **Smooth Animations**: Gravity and velocity provide a smooth jumping mechanism.

## Folder Diectory
.
├── index.html
├── styles.css
├── script.js
└── img/
    ├── dino.png
    ├── dino-dead.png
    ├── cactus1.png
    ├── cactus2.png
    └── cactus3.png

## Gameplay Instructions
- Press Space or Arrow Up to make the dinosaur jump.
- Avoid the incoming cacti to keep your score increasing.
- If the dinosaur collides with a cactus, the game ends. Click the "Restart" button to play again.

## Key Files
index.html: Contains the structure of the game interface.
styles.css: Adds styling to the game elements.
script.js: Implements the game logic, including:
 - Dino movement using gravity and velocity.
 - Dynamic cactus generation.
 - Real-time collision detection.
 - Score tracking and game-over conditions.
