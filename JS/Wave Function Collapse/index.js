function setupCanvas(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    gameLoop();
}

function gameLoop(){
    //Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();
    chooseRandomTile();
    requestAnimationFrame(gameLoop);
}

function chooseRandomTile(){
    let tileX = Math.floor(Math.random() * gridDim);
    let tileY = Math.floor(Math.random() * gridDim);
    paintTile(tileX, tileY)
    //ctx.drawImage(tileset, tileX * 16, tileY * 16, 16, 16, 0, 0, 32, 32);
}

function paintTile(x, y){
    //Draw on the canvas a white filled rectangle
    ctx.fillStyle = "white";
    ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
}

function drawGrid() {
    //Draw rectangle with white border and no fill
    for (let y = 0; y < gridDim; y++) {
        for (let x = 0; x < gridDim; x++) {
            ctx.strokeStyle = "#333";
            ctx.strokeRect(x * cellSize, y * cellSize, cellSize, cellSize);
        }
    }
}

setupCanvas();