'use strict';
//***************************GLOBAL VARIABLES***********************************
var canvas;
var canvasContext;
var ballX = 50;  //
var ballSpeedX = 10; // x axis speed

var ballY = 50;  //
var ballSpeedY = 4; //y axis speed

var player1Score = 0;
var player2Score = 0;

const WINNING_SCORE = 3;

var showingWinScreen = false;

var PaddleY = 250; //this is the position in pixals for the left paddle. Want it
//to move with mouse so not hard coding it with a number in fucntions below
var PaddleRight = 250; //the other paddle
const PADDLE_HEIGHT = 100; //instead of a varible, const can not be changed, this controls the size of the paddle too
const PADDE_THICKNESS = 10;

//***************************Mouse Positioning on Canvas************************

function calculateMousePos (evt) {
  var rect = canvas.getBoundingClientRect(); //the black area which are game is in
  var root = document.documentElement; //handling the document that the canvas is on

   // this is getting where the mouse is in context of where the mouse is in the canvas element
  var mouseX = evt.clientX - rect.left - root.scrollLeft;
  var mouseY = evt.clientY - rect.top - root.scrollTop;
  return {
      x:mouseX,
      y:mouseY
  };
}
//**********"I want these things to happen when the page loads"*****************
function handleMouseClick(evt) {
  if (showingWinScreen){
    player1Score = 0;
    player2Score = 0;
    showingWinScreen = false;
  }
}


window.onload = function () {

  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  var framesPerSecond = 30;
  setInterval(function() {
    moveEverything();
    drawEverything();
  }, 1000 / framesPerSecond);

  canvas.addEventListener('mousedown', handleMouseClick);

  canvas.addEventListener('mousemove',   //THIS MAKES THE PADDLE MOVE WITH CURSER
        function (evt) {
        var mousePos = calculateMousePos(evt);
        PaddleY = mousePos.y - (PADDLE_HEIGHT / 2); //this positions the mouse curser move the paddle at the center and not at the top
  });
}

//**********************************ball reset*********************************

function ballReset() {
  if (player1Score >= WINNING_SCORE || player2Score >= WINNING_SCORE){
    showingWinScreen = true;
  }
  ballSpeedX = -ballSpeedX;
  ballX = canvas.width / 2; //center horizontal
  ballY = canvas.height / 2; //center vertically
}

//*****Have movement code and draw code seperately*****************************


  function computerMovement(){
    var paddleRightCenter = PaddleRight + (PADDLE_HEIGHT / 2);
    if(paddleRightCenter < ballY -35){ //if the right paddle is lower than 35 pixals from the center of the paddle, top chasing it
      PaddleRight += 6;  //then move paddle up, now because 256 because PaddleRight is 250+6 and STORE IT BACK INTO Paddle Right
    }
    else if (paddleRightCenter > ballY + 35)  {
      PaddleRight -= 6; //if it's higher, then move paddle lower
    }
  }

function moveEverything (){
  if (showingWinScreen) {
    return ;
  }

  computerMovement();
  ballX = ballX + ballSpeedX;
  ballY = ballY + ballSpeedY;    //so the ball can go up and down too
  // ballSpeedX = ballSpeedX + 1;  //increase speed of ball


  //*********************************LEFT PADDLE*********************************
  if (ballX < 0){  //the left side
      if (ballY > PaddleY && ballY < PaddleY + PADDLE_HEIGHT) {  //if the ball is below the top of the paddle and ball is above the bottom of the paddle
        ballSpeedX = -ballSpeedX;  //it will flip it's horizontal speed
        var deltaY = ballY - (PaddleY + PADDLE_HEIGHT / 2);
        ballSpeedY = deltaY * 0.35;
    }
    else {
      player2Score ++; //if ball goes past the left side, give a point to player 2
      ballReset();  //otherwise, the ball must be where the paddle isn't so restart
    }
//******************************RIGHT PADDLE************************************
  }
  if (ballX > canvas.width) {  //the right side, dementions are coming from the HTML dom
    if (ballY > PaddleRight && ballY < PaddleRight + PADDLE_HEIGHT) {
    ballSpeedX = -ballSpeedX;
    var deltaY = ballY - (PaddleRight + PADDLE_HEIGHT / 2);
    ballSpeedY = deltaY * 0.35;
  }
    else {
      player1Score ++;  //must be called before reset
      ballReset();
    }
  }
  if (ballY < 0) {
    ballSpeedY = -ballSpeedY;
  }
  if(ballY > canvas.height) {
    ballSpeedY = -ballSpeedY;
  }
}

//**************************************draw code******************************
function drawNet () {
  for (var i = 0; i < canvas.height; i+=40) {  //i is the pixals
    colorRectangle(canvas.width/ 2-1,i,2, 20, 'white');
  }
}


function drawEverything () {
  //colors the black rectangle
  colorRectangle (0,0, canvas.width, canvas.height, 'black');

  if (showingWinScreen){
    canvasContext.fillStyle = 'white';


    if (player1Score >= WINNING_SCORE) {
      canvasContext.fillText('LEFT PLAYER WON!', 350, 200);
    }
    else if (player2Score >= WINNING_SCORE ) {
      canvasContext.fillText('RIGHT PLAYER WON!', 350, 200);
    }
    canvasContext.fillText('click to continue', 350,500);
    return;
  }

  drawNet();
  //colors the left paddle
  colorRectangle (0, PaddleY, PADDE_THICKNESS,PADDLE_HEIGHT  , 'white');

  //the right paddle
  colorRectangle (canvas.width - PADDE_THICKNESS, PaddleRight, PADDE_THICKNESS, PADDLE_HEIGHT  , 'white');

  colorCircle(ballX, ballY, 10, 'orange');
}

//next line draws the ball
function colorCircle (centerX, centerY, radius, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);  // x,y, center of circle, radius of circle, PI calculation that makes a circle, clockwise
  canvasContext.fill();


  canvasContext.fillText(player1Score, 100, 100);
  canvasContext.fillText(player2Score, canvas.width-100, 100);
}


function colorRectangle (leftX, topY, width, height, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect (leftX, topY, width, height);

}
