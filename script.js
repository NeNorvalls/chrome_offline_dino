let board, context, dinoImg, cactus1Img, cactus2Img, cactus3Img;
let boardWidth = 750, boardHeight = 250;
let dinoWidth = 88, dinoHeight = 94, dinoX = 50, dinoY = boardHeight - dinoHeight;
let dino = { x: dinoX, y: dinoY, width: dinoWidth, height: dinoHeight };
let cactusArray = [], velocityX = -8, velocityY = 0, gravity = 0.4;
let gameOver = false, score = 0;

const cactusTypes = [
    { imgSrc: "./img/cactus1.png", width: 34, height: 70 },
    { imgSrc: "./img/cactus2.png", width: 69, height: 70 },
    { imgSrc: "./img/cactus3.png", width: 102, height: 70 }
];

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d"); 

    dinoImg = loadImage("./img/dino.png", () => drawImage(dinoImg, dino));

    cactus1Img = loadImage(cactusTypes[0].imgSrc);
    cactus2Img = loadImage(cactusTypes[1].imgSrc);
    cactus3Img = loadImage(cactusTypes[2].imgSrc);

    requestAnimationFrame(update);
    setInterval(placeCactus, 1000);
    document.addEventListener("keydown", moveDino);
}

function loadImage(src, onload) {
    let img = new Image();
    img.src = src;
    if (onload) img.onload = onload;
    return img;
}

function drawImage(img, obj) {
    context.drawImage(img, obj.x, obj.y, obj.width, obj.height);
}

function update() {
    if (gameOver) return;
    requestAnimationFrame(update);
    context.clearRect(0, 0, board.width, board.height);

    velocityY += gravity;
    dino.y = Math.min(dino.y + velocityY, dinoY);
    drawImage(dinoImg, dino);

    for (let cactus of cactusArray) {
        cactus.x += velocityX;
        drawImage(cactus.img, cactus);
        if (detectCollision(dino, cactus)) endGame();
    }

    context.fillStyle = "black";
    context.font = "20px courier";
    context.fillText(++score, 5, 20);
}

function moveDino(e) {
    if (gameOver || dino.y != dinoY) return;
    if (e.code === "Space" || e.code === "ArrowUp") velocityY = -10;
}

function placeCactus() {
    if (gameOver) return;
    let rand = Math.random();
    let type = rand > 0.9 ? 2 : rand > 0.7 ? 1 : rand > 0.5 ? 0 : -1;
    if (type === -1) return;

    let cactusType = cactusTypes[type];
    cactusArray.push({
        img: [cactus1Img, cactus2Img, cactus3Img][type],
        x: boardWidth,
        y: dinoY + dinoHeight - cactusType.height,
        width: cactusType.width,
        height: cactusType.height
    });

    if (cactusArray.length > 5) cactusArray.shift();
}

function detectCollision(a, b) {
    return a.x < b.x + b.width &&
           a.x + a.width > b.x &&
           a.y < b.y + b.height &&
           a.y + a.height > b.y;
}

function endGame() {
    gameOver = true;
    dinoImg.src = "./img/dino-dead.png";
    dinoImg.onload = () => drawImage(dinoImg, dino);
}

// Variables Initialization
// Declares variables to store references to various elements and images
// Sets the dimensions of the game board
// Defines the dimensions and initial position of the dinosaur character
// Creates an object representing the dinosaur character
// Initializes variables for managing cacti and their movement, as well as gravity
// Flags to track the game state and the player's score

// Cactus Types
// Defines an array of objects representing different types of cacti, including their image sources and dimensions

// Initialization Function
// Runs the specified code once the webpage has finished loading
// Retrieves the game board element and sets its dimensions
// Loads images for the dinosaur and cacti using the loadImage function
// Listens for keydown events to control the dinosaur's movement
// Initiates the game loop using requestAnimationFrame and schedules cacti placement using setInterval

// Utility Functions
// Loads an image from the specified source and calls the provided callback function once the image is loaded
// Draws an image onto the canvas at the specified coordinates and dimensions

// Game Loop Function
// Updates the game state and renders the game objects
// Adjusts the dinosaur's position based on gravity and user input
// Moves and renders each cactus, checking for collisions with the dinosaur
// Updates and displays the player's score

// Event Handling Functions
// Handles key presses to control the dinosaur's jumping
// Places new cacti on the game board at random intervals

// Collision Detection Function
// Checks if two objects collide by comparing their positions and dimensions

// Game Over Function
// Ends the game when the dinosaur collides with a cactus, updates the dinosaur's image, and stops further gameplay
