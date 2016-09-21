'use strict';

var username = prompt('Hello, please enter your name');

var start = prompt( 'Welcome ' + username + ',' + 'are you hungry?');

if (start == 'yes'){

  var vegetarianQues = prompt('Are you a vegetarian?'); //start of vegetarian branch

  if (vegetarianQues.toUpperCase() === 'YES' || vegetarianQues.toUpperCase() === 'Y') { //yes branch of vegetarian
    var tofu = prompt ('Do you like tofu?');
  }
  if (tofu === 'yes')
  {var salad = prompt ('Do you like salad?');}//Salad!!!
  if(salad === 'yes')
  {var oranges = prompt ('Do you like oranges?');}
  if (oranges === 'yes')
  {prompt('You should eat a tofu citris salad!!');} //final
  if (oranges === 'no')
  {prompt ('You should eat a eggless Ceasar salad with seitan! Yum!');} //final
  if (salad === 'no')
  {var choice = prompt ('Do you like wraps?');}
  if (choice === 'yes')
  {prompt ('Go eat a Mexican burrito with no meat');} //final
  if (choice === 'no')
  {prompt ('You are impossible. I can not help you. Starve!');} //final
  if (tofu === 'no') //don't like tofu branch
  {var budget = prompt ('Are you on a budget? Like under $15?');}
  if (budget === 'yes')
  {
    var sandwich = prompt ('Do you like sandwiches?');
  }

  if (sandwich === 'yes')
  {prompt ('Go to Subway and order a veggie sub!');}

  if (sandwich === 'no')
  {prompt('Go to the food court and order a veggie stir fry from Wok!');}

  if (vegetarianQues === 'no')
  {var chicken = prompt ('Do you like chicken?');}

  if (chicken === 'yes')
  {var grilled = prompt ('Do you want grilled chicken?');}

  if (grilled === 'yes')
  {var anotherSandwich = prompt('Do you feel like a sandwich?');}

  if (grilled === 'no')
  {var nogrilledSandwich = prompt ('Do you feel like a sandwich?');}

  if (nogrilledSandwich === 'yes')
    prompt('Go to KFC and get a fried chicken sandwich! BOOM!');}
if (nogrilledSandwich === 'no')
  prompt ('Then go eat some friend chicken and waffels! You will thank me later');

if (anotherSandwich === 'yes')
  {prompt ('Go to Subway and get a grilled teriyaki sandwich!');}

if (anotherSandwich === 'no')
  {prompt('Go to a diner and order a grilled chicken entree with two sides. You are Welcome!');}

if (chicken === 'no')
  {var healthy = prompt ('Are you trying to healthy?');}
if (healthy === 'yes')
  {var seriously = prompt ('Seriously?');}
if (seriously === 'yes')
  prompt ('Sorry, I can not help you. Go away!'); //final
if (seriously === 'no')
  prompt('I did not think so, go eat Chinese food');
if (healthy === 'no')
{var pasta = prompt ('Would you like pasta instead?');}
if (pasta.toUpperCase() === 'YES' || pasta.toUpperCase() === 'Y' );
prompt ('Great. Go to Olive Garden!');
if (pasta.toUpperCase() === 'NO' || pasta.toUpperCase() === 'N')
  prompt ('Go eat some BBQ Chicken');
else if (start === 'no')
  {prompt ('Well then are you thirsty?');}
