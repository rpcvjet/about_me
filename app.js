'use strict';

var counter = 0;

prompt('Let\'s Play a Game! Choose Yes or No. Press enter when you are ready to begin');
var spicy = prompt('Does Kenneth like spicy food?');
if (spicy.toUpperCase() === 'YES' || spicy.toUpperCase() === 'Y')
{counter++;}
else{};

var state = prompt ('Was Born in Alabama?');

if (state.toUpperCase() === 'NO' || state.toUpperCase() === 'N')
{counter++;}

else{};

var sport = prompt ('Did Kenneth play football in college?');
if (sport.toUpperCase() === 'NO' || sport.toUpperCase() === 'N')
{counter++;}
else{};

var dreamjob = prompt ('Will Kenneth ever be an employed software engineer?');
if (dreamjob.toUpperCase() === 'YES' || dreamjob.toUpperCase() === 'Y')
{counter++;}
else{}

var handsome = prompt ('Is Kenneth the most handsome man in Code 201?');
if (handsome.toUpperCase() === 'YES' || handsome.toUpperCase() === 'Y')
{counter++;}
else{};

if (counter === 5)
   {prompt('Congratulations. You got all ' + counter + ' questions correct. You are the champion!');}

else if (counter <= 4)
  {prompt('Not bad, you got  ' + counter + ' questions correct');}

else
{prompt('Seriously, you only got ' + counter + ' questions right? You suck!')}
