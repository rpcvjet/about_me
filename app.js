'use strict';

var username = prompt('Hello, please enter your name');

var start = prompt( 'Welcome ' + username + ',' + 'are you hungry?');

if (start.toUpperCase() == 'YES' || start.toUpperCase() === 'Y'){

  var vegetarianQues = prompt('Are you a vegetarian?'); //start of vegetarian branch

  if (vegetarianQues.toUpperCase() === 'YES' || vegetarianQues.toUpperCase() === 'Y') { //YES branch of vegetarian
    var tofu = prompt ('Do you like tofu?');
  }
  if (tofu.toUpperCase() === 'YES' || tofu.toUpperCase() === 'Y' )
  {var salad = prompt ('Do you like salad?');}//Salad!!!
  if(salad.toUpperCase() === 'YES' || salad.toUpperCase() === 'Y')
  {var oranges = prompt ('Do you like oranges?');}
  if (oranges.toUpperCase() === 'YES' || oranges.toUpperCase() === 'Y')
  {prompt('You should eat a tofu citris salad!!');} //final
  if (oranges.toUpperCase() === 'NO' || oranges.toUpperCase() === 'N')
  {prompt ('You should eat a eggless Ceasar salad with seitan! Yum!');} //final
  if (salad.toUpperCase() === 'NO' || salad.toUpperCase() === 'N')
  {var choice = prompt ('Do you like wraps?');}
  if (choice.toUpperCase() === 'YES' || choice.toUpperCase() === 'Y')
  {prompt ('Go eat a Mexican burrito with no meat');} //final
  if (choice.toUpperCase() === 'NO' || choice.toUpperCase() === 'N')
  {prompt ('You are impossible. I can not help you. Starve!');} //final
  if (tofu.toUpperCase() === 'NO' || tofu.toUpperCase() === 'N') //don't like tofu branch
  {var budget = prompt ('Are you on a budget? Like under $15?');}
  if (budget.toUpperCase() === 'YES' || budget.toUpperCase() === 'Y')
  {
    var sandwich = prompt ('Do you like sandwiches?');
  }

  if (sandwich.toUpperCase() === 'YES' || sandwich.toUpperCase() === 'Y')
  {prompt ('Go to Subway and order a veggie sub!');}

  if (sandwich.toUpperCase() === 'NO' || sandwich.toUpperCase() === 'N')
  {prompt('Go to the food court and order a veggie stir fry from Wok!');}

  if (vegetarianQues.toUpperCase() === 'NO' || vegetarianQues.toUpperCase() === 'N')
  {var chicken = prompt ('Do you like chicken?');}

  if (chicken.toUpperCase() === 'YES' || chicken.toUpperCase() === 'Y')
  {var grilled = prompt ('Do you want grilled chicken?');}

  if (grilled.toUpperCase() === 'YES' || grilled.toUpperCase() === 'Y')
  {var anotherSandwich = prompt('Do you feel like a sandwich?');}

  if (grilled.toUpperCase() === 'NO' || grilled.toUpperCase() === 'N')
  {var nogrilledSandwich = prompt ('Do you feel like a sandwich?');}

  if (nogrilledSandwich.toUpperCase() === 'YES' || nogrilledSandwich.toUpperCase() === 'Y')
    prompt('Go to KFC and get a fried chicken sandwich! BOOM!');}
if (nogrilledSandwich.toUpperCase() === 'NO' || nogrilledSandwich.toUpperCase() === 'N')
  prompt ('Then go eat some friend chicken and waffels! You will thank me later');

if (anotherSandwich.toUpperCase() === 'YES' || anotherSandwich.toUpperCase() === 'Y')
  {prompt ('Go to Subway and get a grilled teriyaki sandwich!');}

if (anotherSandwich.toUpperCase() === 'NO' || anotherSandwich.toUpperCase() === 'N')
  {prompt('Go to a diner and order a grilled chicken entree with two sides. You are Welcome!');}

if (chicken.toUpperCase() === 'NO' || chicken.toUpperCase() === 'N')
  {var healthy = prompt ('Are you trying to eat healthy?');}
if (healthy.toUpperCase() === 'YES' || healthy.toUpperCase() === 'Y')
  {var seriously = prompt ('Seriously?');}
if (seriously.toUpperCase() === 'YES' || seriously.toUpperCase() === 'Y')
  prompt ('Sorry, I can not help you. Go away!'); //final
if (seriously.toUpperCase() === 'NO' || seriously.toUpperCase() === 'N')
  prompt('I did not think so, go eat Chinese food');
if (healthy.toUpperCase() === 'NO' || healthy.toUpperCase() === 'N')
{var pasta = prompt ('Would you like pasta instead?');}
if (pasta.toUpperCase() === 'YES' || pasta.toUpperCase() === 'Y' );
prompt ('Great. Go to Olive Garden!');
if (pasta.toUpperCase() === 'NO' || pasta.toUpperCase() === 'N')
  prompt ('Go eat some BBQ Chicken');
else if (start === 'NO' || start.toUpperCase() === 'N')
  {prompt ('Please come back when you are hungry. Thank you and have a nice day!');}
