let character = document.getElementById("character");
let block = document.getElementById("block");
let game = document.getElementById("game");
//let scoreDisplay = document.getElementById("score");
//let highScoreDisplay = document.getElementById("highScore");
//let restartButton = document.getElementById("restartButton");

//randomizes the gems coming at Wilson
let blockImages = [
  "https://assets.onecompiler.app/439fakb2q/439f9tj8g/pixil-frame-0.png",
  "https://assets.onecompiler.app/439fakb2q/439f9tj8g/pixil-frame-2.png",
  "https://assets.onecompiler.app/439fakb2q/439f9tj8g/pixil-frame-1.png",
  "https://assets.onecompiler.app/439fakb2q/439f9tj8g/pixil-frame-3.png",
  "https://assets.onecompiler.app/439fakb2q/439f9tj8g/pixil-frame-4.png"
  
];

//let score = 0;
//let highScore = localStorage.getItem("highScore") || 0;
//let isGameOver = false;
//highScoreDisplay.innerText = "High Score: " + highScore;

//Makes wilson run for his lifeee

//Makes Wilson jump for his life
function jump(){
  //!isGameOver && 
  //if (!character.classList.contains("animate")) {
    //character.style.backgroundImage = `url('${characterFrames[0]}')`;
    //character.classList.add("animate");
    //setTimeout(() => {
      //character.classList.remove("animate");
  if (character.classList != "animate") {
    character.classList.add("animate");
  }
  setTimeout(function () {
    character.classList.remove("animate");
      
  }, 500);//match the css animation duration... hopefully
}

// For the up and down arrowsss
document.addEventListener("keydown", function (event) {
  if (event.key === "Click") {
    jump();
  }
});

//Function to change block randomlyyyyy
function randomizeBlock() {
  let randomImage = blockImages[Math.floor(Math.random() * blockImages.length)];
  block.style.backgroundImage = `url('${randomImage}')`;
  let randomSpeed = Math.random() * (2 - 0.7) + 1.2; //Random speed between 1.2s - 2s
  block.style.animation = `block ${randomSpeed}s infinite linear`;
}
//window.onload = () => {
 // block.style.animation = "block 1.5s infinite liner";
  //setTimeout(randomizeBlock, 100;
//}

//Checks when block reaches the end and randomizes again
block.addEventListener("animationiteration", randomizeBlock);

//Collision detection and Score countinggg because wilson is so heawt  
//let gameInterval = 
setInterval(function () {
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  
  if(blockLeft < 40 && blockLeft > 0 && characterTop >= 130) {
    alert("gameOver();")
  //} else if (!isGameOver) {
    //score += 1; 
    //scoreDisplay.innerText = "Score: " + score;
    block.style.animation = "none";
    block.style. animation = "none";
  }
}, 10); 






// adds one point per second
//function gameOver() { 
  //isGameOver = true;
  //clearInterval(gameInterval);
  //block.style.animation = "none"; //Stops block animation
  //block.style.display = "none"; //Hide block
  //restartButton.style.display = "block";
  
  //Save dem high scorers
  //if (score > highScore) {
    //highScore = score;
    //localStorage.setItem("highScore", highScore);
   // highScoreDisplay.innerText = "High Score: " + highScore;
  //}
//}
    
// Restarts the game
//function restartGame() {
  //isGameOver = false;
  //score = 0;
  //scoreDisplay.innerText = "Score: " + score;
  //restartButton.style.display = "none";
  
  //block.style.display = "block";
  //restarts animation
  //block.style.animation = "block 1.5s infinite linear";
  //randomizeBlock(); 
  //gameInterval = setInterval(function () {
    //if (!isGameOver) {
      //score += 1;
      //scoreDisplay.innerText = "Score: " + score;
    //}
  //}, 1000);
  

//Randomizw block when game starts
randomizeBlock();