'use strict';

var counter = 0;
var lucky = 12;

function spicy() {
  prompt('Let\'s Play a Game!  Click OK when you are ready to begin');
  var spicy = prompt('Does Kenneth like spicy food?');
  if (spicy.toUpperCase() === 'YES' || spicy.toUpperCase() === 'Y')

  {alert('That\'s right!');
    console.log ('I love spicy food!');
    counter++;
  }
  else {
    alert('Sorry, that is incorrect');
    console.log ('I love spicy food!');
  };
}
spicy();

function state() {
  var state = prompt ('Was Kenneth born in Alabama?');

  if (state.toUpperCase() === 'NO' || state.toUpperCase() === 'N')
  {alert('Correct. I was born in Florida');
    console.log('I was born in Florida');
    counter++;
  }

  else{
    alert('Uhh, no.');
    console.log ('I was born in Florida');
  };
}
state();

function football() {
  var sport = prompt ('Did Kenneth play football in college?');
  if (sport.toUpperCase() === 'NO' || sport.toUpperCase() === 'N')
  {alert('Correct. I did not play football. I was on the crew team.');
    console.log('I did not play football. I was on the rowing team.');
    counter++;}
  else{
    alert('WRONG! I\'m no meathead.');
    console.log ('I did not play football. I was on the rowing team.');
  };
}
football();

function engineer() {
  var dreamjob = prompt ('Will Kenneth ever be an employed software engineer?');
  if (dreamjob.toUpperCase() === 'YES' || dreamjob.toUpperCase() === 'Y')
  {alert('Correct. I cetainly hope so at least.');
    console.log('Yes he will become a software engineer.');
    counter++;
  }

  else{
    alert('Incorrect! Have you no faith in me?');
    console.log ('Yes he will become a software engineer.');
  }
}
engineer();

function guapo() {
  var handsome = prompt ('Is Kenneth the most handsome man in Code 201?');
  if (handsome.toUpperCase() === 'YES' || handsome.toUpperCase() === 'Y')
  {alert('Correct. Well, obviously!');
    console.log('I\'m too sexy for this course');
    counter++;
  }

  else{
    alert('Incorrect! Look around, truly I am the best goodlooking');
    console.log ('Kenneth is the best looking man.');
  };
}
guapo();

function numGuess() {
  for (var i = 3; i >= 0; i--){
    var guess = parseInt(prompt('Pick a number between 1-20.'));
    console.log(guess);
    if (guess > lucky){
      alert ('That\'s not it. Your guess is too HIGH! Choose again. You have ' + i + ' more chances.');
    }
    if (guess < lucky){
      alert ('That\'s not it. Your guess is too LOW! Choose again. You have ' + i + ' more chances.');
    }
    else {
      alert('That\'s right!');
      counter++;
      break;
    }
  }
}
numGuess();

var attempts = 0;
var choice = true;
var country = ['ROMANIA', 'ITALY', 'GERMANY', 'ENGLAND', 'GUATEMALA', 'SPAIN', 'JAPAN', 'THAILAND', 'HOLLAND', 'FRANCE', 'POLAND', 'SERBIA', 'BELGIUM', 'TURKEY'];

function travel() {
  while(choice && attempts < 6){
    var guess2 = prompt('I have traveled to a few countries. Guess one!');
    for (var j = 0; j < country.length; j++)
      if (country[j] === guess2.toUpperCase()){
        alert('That\'s right! I have traveled to ' + guess2 + '!');
        choice = false;
        counter++;
        console.log(guess2);
        break;
      }

    if (country[i] !== guess2.toUpperCase()){
      alert('Nope. I have never traveled to ' + guess2 + '!' + ' Try again.');
      attempts++;
    }
  }
}
travel();

if (counter === 7)
   {prompt('Congratulations. You got all ' + counter + ' questions correct. You are the champion!');}

else if (counter >= 3 && counter <= 6)
  {prompt('Not bad, you got  ' + counter + ' questions correct.');}

else
{prompt('Seriously, you only got ' + counter + ' questions right? You suck!');}
