
//grid where every int is corresponding to a grid cell 
let grid = [0, 0, 0, 0, 0, 0, 0, 0, 0];
//save the players turn
let turn = 0;
//check if/what winner won
let winner = 0;

function setup() {
  createCanvas(1000, 700);

  //wghen setup is called reset variables
  for(let i = 0; i < 9; i++)
  {
    grid[i] = 0;
  }
  turn = 0;
  winner = 0;
}

function draw() {
  //bg
  background(220);

  //if no one won do:
  if(winner == 0)
  {
    //lines
    strokeWeight(8);
    line(400, 20, 400, 580);
    line(600, 20, 600, 580);
    line(220, 200, 780, 200);
    line(220, 400, 780, 400);

    //placing
    Layer();

    //check for win
    CheckForWin();
  }

  //check for ending
  Ending();

  //text settings
  textSize(50);
  textFont('Georgia');
}

function mousePressed() {
  PlaceLayers();
}

function CheckForWin()
{
  //if player 1 has 3 in a row, win
  if(grid[0] == 1 && grid[1] == 1 && grid[2] == 1 || grid[3] == 1 && grid[4] == 1 && grid[5] == 1 || grid[6] == 1 && grid[7] == 1 && grid[8] == 1 || grid[0] == 1 && grid[3] == 1 && grid[6] == 1 || grid[1] == 1 && grid[4] == 1 && grid[7] == 1 || grid[2] == 1 && grid[5] == 1 && grid[8] == 1 || grid[0] == 1 && grid[4] == 1 && grid[8] == 1 || grid[2] == 1 && grid[4] == 1 && grid[6] == 1)
  {
    console.log("Winner");
    winner = 1;
  }
  //if player 2 has 3 in a row, win
  else if(grid[0] == 2 && grid[1] == 2 && grid[2] == 2 || grid[3] == 2 && grid[4] == 2 && grid[5] == 2 || grid[6] == 2 && grid[7] == 2 && grid[8] == 2 || grid[0] == 2 && grid[3] == 2 && grid[6] == 2 || grid[1] == 2 && grid[4] == 2 && grid[7] == 2 || grid[2] == 2 && grid[5] == 2 && grid[8] == 2 || grid[0] == 2 && grid[4] == 2 && grid[8] == 2 || grid[2] == 2 && grid[4] == 2 && grid[6] == 2)
  {
    console.log("Winner");
    winner = 2;
  }
  //if no one won, draw
  else if(grid[0] != 0 && grid[1] != 0 && grid[2] != 0 && grid[3] != 0 && grid[4] != 0 && grid[5] != 0 && grid[6] != 0 && grid[7] != 0 && grid[8] != 0)
  {
    console.log("Draw");
    winner = 3;
  }
}

//check for ending
function Ending()
{
  //draw
  if(winner == 3)
  {
    text("Draw", 435, 300);
  }
  //circle player
  if(winner == 1)
  {
    text("Circle Player Wins", 300, 300);
  }
  //cross player
  if(winner == 2)
  {
    text("cross Player Wins", 300, 300);
  }
  //restart text
  if(winner != 0)
  {
    text("Press Spacebar To Restart", 225, 400);
  }
}
//keyPressed function
function keyPressed()
{
  //call setup
  setup();
}
//cross draw function
function cross(x, y)
{
  //offset y
  y -= 18;
  //draw
  line(x - 20, y, x + 20, y + 40);
  line(x + 20, y, x - 20, y + 40);
}
//place circles & crosses
function Layer()
{
  let x;
  let y;

  let j;

  //if "i" is less then 9 do:
  for(let i = 0; i < 9; i++)
  { 
    //if its circles turn
    if(grid[i] == 1)
    {
      //check which layer clicked
      if(i == 0 || i == 3 || i == 6) {j = 0} else if(i == 1 || i == 4 || i == 7) {j = 1} else if(i == 2 || i == 5 || i == 8) {j = 2}

      //if layer 1
      if(j <= 2 && i >= 0 && i <= 2)
      {
        x = 310 + 190 * j;
        y = 110;
      }
      //if layer 2
      if(j <= 2 && i >= 3 && i <= 5)
      {
        x = 310 + 190 * j;
        y = 300;
      }
      //if layer 3
      if(j <= 2 && i >= 6 && i <= 9)
      {
        x = 310 + 190 * j;
        y = 490;
      }
      //draw circle
      circle(x, y, 50);
    }
    //if its crosses turn
    if(grid[i] == 2)
    {
      //check which layer clicked
      if(i == 0 || i == 3 || i == 6) {j = 0} else if(i == 1 || i == 4 || i == 7) {j = 1} else if(i == 2 || i == 5 || i == 8) {j = 2}
      //if layer 1
      if(j <= 2 && i >= 0 && i <= 2)
      {
        x = 310 + 190 * j;
        y = 110;
      }
      //if layer 2
      if(j <= 2 && i >= 3 && i <= 5)
      {
        x = 310 + 190 * j;
        y = 300;
      }
      //if layer 3
      if(j <= 2 && i >= 6 && i <= 9)
      {
        x = 310 + 190 * j;
        y = 490;
      }
      //draw cross
      cross(x, y, 50);
    }
  }
}
//place layers
function PlaceLayers()
{
  //Layer 01

  if(mouseX > 220 && mouseX < 400 && mouseY > 20 && mouseY < 200 && grid[0] == 0)
  {
    if(turn == 0)
    {
      grid[0] = 1;
      turn = 1;
    }
    else
    {
      grid[0] = 2;
      turn = 0;
    }
  }

  if(mouseX > 400 && mouseX < 580 && mouseY > 20 && mouseY < 200 && grid[1] == 0)
  {
    if(turn == 0)
    {
      grid[1] = 1;
      turn = 1;
    }
    else
    {
      grid[1] = 2;
      turn = 0;
    }
  }

  if(mouseX > 580 && mouseX < 760 && mouseY > 20 && mouseY < 200 && grid[2] == 0)
  {
    if(turn == 0)
    {
      grid[2] = 1;
      turn = 1;
    }
    else
    {
      grid[2] = 2;
      turn = 0;
    }
  }

  //Layer 02

  if(mouseX > 220 && mouseX < 400 && mouseY > 210 && mouseY < 390 && grid[3] == 0)
  {
    if(turn == 0)
    {
      grid[3] = 1;
      turn = 1;
    }
    else
    {
      grid[3] = 2;
      turn = 0;
    }
  }

  if(mouseX > 400 && mouseX < 580 && mouseY > 210 && mouseY < 390 && grid[4] == 0)
  {
    if(turn == 0)
    {
      grid[4] = 1;
      turn = 1;
    }
    else
    {
      grid[4] = 2;
      turn = 0;
    }
  }

  if(mouseX > 580 && mouseX < 760 && mouseY > 210 && mouseY < 390 && grid[5] == 0)
  {
    if(turn == 0)
    {
      grid[5] = 1;
      turn = 1;
    }
    else
    {
      grid[5] = 2;
      turn = 0;
    }
  }

  //Layer 03

  if(mouseX > 220 && mouseX < 400 && mouseY > 400 && mouseY < 580 && grid[6] == 0)
  {
    if(turn == 0)
    {
      console.log("test");
      grid[6] = 1;
      turn = 1;
    }
    else
    {
      grid[6] = 2;
      turn = 0;
    }
  }

  if(mouseX > 400 && mouseX < 580 && mouseY > 400 && mouseY < 580 && grid[7] == 0)
  {
    if(turn == 0)
    {
      grid[7] = 1;
      turn = 1;
    }
    else
    {
      grid[7] = 2;
      turn = 0;
    }
  }

  if(mouseX > 580 && mouseX < 760 && mouseY > 400 && mouseY < 580 && grid[8] == 0)
  {
    if(turn == 0)
    {
      grid[8] = 1;
      turn = 1;
    }
    else
    {
      grid[8] = 2;
      turn = 0;
    }
  }
}