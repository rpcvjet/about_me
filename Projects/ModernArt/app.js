'use strict';
//Notes
//connected to the DOM first and added Evenlistner and function together. On
//click, it will run a function that will set the global variable  and render it
//false. This is how your 'GRAB' the color/dip paint brush into designated color.
//by setting the CurrentColor to as a global variable.


//Or another analogy is if there are multiple switches to turn off or on based off
//a click, turn them all off (i.e.false), and then turn them on in the div seperately.

//**************Setting up page load and setting divs to False ****************
  var CurrentColor = 1;

  document.getElementById('red').addEventListener('click', function() {
    CurrentColor = 1}, false);
  document.getElementById('yellow').addEventListener('click', function(){
    CurrentColor = 2}, false);
  document.getElementById('blue').addEventListener('click', function() {
    CurrentColor = 3}, false);
  document.getElementById('white').addEventListener('click', function () {
    CurrentColor = 4}, false);
//******************************top section************************************
  document.getElementById('topleft').addEventListener('click', function () {
    if (CurrentColor == 1) {
      this.style.backgroundColor = 'red';
    }
    else if (CurrentColor == 2) {
      this.style.backgroundColor = 'yellow';
    }
    else if (CurrentColor == 3) {
      this.style.backgroundColor = 'blue';
    }
    else if (CurrentColor == 4) {
      this.style.backgroundColor = 'white';
    }
  });
//**************************five************************************************
document.getElementById('five').addEventListener('click', function () {
  if (CurrentColor == 1) {
    this.style.backgroundColor = 'red';
  }
  else if (CurrentColor == 2) {
    this.style.backgroundColor = 'yellow';
  }
  else if (CurrentColor == 3) {
    this.style.backgroundColor = 'blue';
  }
  else if (CurrentColor == 4) {
    this.style.backgroundColor = 'white';
  }
});

//*************************nine************************************************

document.getElementById('nine').addEventListener('click', function () {
  if (CurrentColor == 1) {
    this.style.backgroundColor = 'red';
  }
  else if (CurrentColor == 2) {
    this.style.backgroundColor = 'yellow';
  }
  else if (CurrentColor == 3) {
    this.style.backgroundColor = 'blue';
  }
  else if (CurrentColor == 4) {
    this.style.backgroundColor = 'white';
  }
});
//*******************thirteen************************************************
document.getElementById('thirteen').addEventListener('click', function () {
  if (CurrentColor == 1) {
    this.style.backgroundColor = 'red';
  }
  else if (CurrentColor == 2) {
    this.style.backgroundColor = 'yellow';
  }
  else if (CurrentColor == 3) {
    this.style.backgroundColor = 'blue';
  }
  else if (CurrentColor == 4) {
    this.style.backgroundColor = 'white';
  }
});
//*************************seventeen***************************************
document.getElementById('seventeen').addEventListener('click', function () {
  if (CurrentColor == 1) {
    this.style.backgroundColor = 'red';
  }
  else if (CurrentColor == 2) {
    this.style.backgroundColor = 'yellow';
  }
  else if (CurrentColor == 3) {
    this.style.backgroundColor = 'blue';
  }
  else if (CurrentColor == 4) {
    this.style.backgroundColor = 'white';
  }
});
