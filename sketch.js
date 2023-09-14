let grid = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let turn = 0;
let winner = 0;

function setup() {
  createCanvas(1000, 700);

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
  if(grid[0] == 1 && grid[1] == 1 && grid[2] == 1 || grid[3] == 1 && grid[4] == 1 && grid[5] == 1 || grid[6] == 1 && grid[7] == 1 && grid[8] == 1 || grid[0] == 1 && grid[3] == 1 && grid[6] == 1 || grid[1] == 1 && grid[4] == 1 && grid[7] == 1 || grid[2] == 1 && grid[5] == 1 && grid[8] == 1 || grid[0] == 1 && grid[4] == 1 && grid[8] == 1 || grid[2] == 1 && grid[4] == 1 && grid[6] == 1)
  {
    console.log("Winner");
    winner = 1;
  }
  else if(grid[0] == 2 && grid[1] == 2 && grid[2] == 2 || grid[3] == 2 && grid[4] == 2 && grid[5] == 2 || grid[6] == 2 && grid[7] == 2 && grid[8] == 2 || grid[0] == 2 && grid[3] == 2 && grid[6] == 2 || grid[1] == 2 && grid[4] == 2 && grid[7] == 2 || grid[2] == 2 && grid[5] == 2 && grid[8] == 2 || grid[0] == 2 && grid[4] == 2 && grid[8] == 2 || grid[2] == 2 && grid[4] == 2 && grid[6] == 2)
  {
    console.log("Winner");
    winner = 2;
  }
  else if(grid[0] != 0 && grid[1] != 0 && grid[2] != 0 && grid[3] != 0 && grid[4] != 0 && grid[5] != 0 && grid[6] != 0 && grid[7] != 0 && grid[8] != 0)
  {
    console.log("Draw");
    winner = 3;
  }
}

function Ending()
{
  if(winner == 3)
  {
    text("Draw", 435, 300);
  }

  if(winner == 1)
  {
    text("Circle Player Wins", 300, 300);
  }

  if(winner == 2)
  {
    text("cross Player Wins", 300, 300);
  }

  if(winner != 0)
  {
    text("Press Spacebar To Restart", 225, 400);
  }
}

function keyPressed()
{
  setup();
}

function cross(x, y)
{
  y -= 18;

  line(x - 20, y, x + 20, y + 40);
  line(x + 20, y, x - 20, y + 40);
}

function Layer()
{
  let x;
  let y;

  let j;

  for(let i = 0; i < 9; i++)
  {
    if(grid[i] == 1)
    {
      if(i == 0 || i == 3 || i == 6) {j = 0} else if(i == 1 || i == 4 || i == 7) {j = 1} else if(i == 2 || i == 5 || i == 8) {j = 2}

      if(j <= 2 && i >= 0 && i <= 2)
      {
        x = 310 + 190 * j;
        y = 110;
      }
      if(j <= 2 && i >= 3 && i <= 5)
      {
        x = 310 + 190 * j;
        y = 300;
      }
      if(j <= 2 && i >= 6 && i <= 9)
      {
        x = 310 + 190 * j;
        y = 490;
      }
      circle(x, y, 50);
    }

    if(grid[i] == 2)
    {
      if(i == 0 || i == 3 || i == 6) {j = 0} else if(i == 1 || i == 4 || i == 7) {j = 1} else if(i == 2 || i == 5 || i == 8) {j = 2}

      if(j <= 2 && i >= 0 && i <= 2)
      {
        x = 310 + 190 * j;
        y = 110;
      }
      if(j <= 2 && i >= 3 && i <= 5)
      {
        x = 310 + 190 * j;
        y = 300;
      }
      if(j <= 2 && i >= 6 && i <= 9)
      {
        x = 310 + 190 * j;
        y = 490;
      }
      cross(x, y, 50);
    }
  }
}

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