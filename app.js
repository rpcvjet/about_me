'use strict';

var counter = 0;

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

var sport = prompt ('Did Kenneth play football in college?');
if (sport.toUpperCase() === 'NO' || sport.toUpperCase() === 'N')
{alert('Correct. I did not play football. I was on the crew team.');
  console.log('I did not play football. I was on the rowing team.');
  counter++;}
else{
  alert('WRONG! I\'m no meathead.');
  console.log ('I did not play football. I was on the rowing team.');
};

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

if (counter === 5)
   {prompt('Congratulations. You got all ' + counter + ' questions correct. You are the champion!');}

else if (counter >= 3 && counter <= 4)
  {prompt('Not bad, you got  ' + counter + ' questions correct');}

else
{prompt('Seriously, you only got ' + counter + ' questions right? You suck!');}
