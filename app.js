'use strict';

var username = prompt('Hello, please enter your name');

var start = prompt( 'Welcome ' + username + ',' + 'are you hungry?');

if (start == 'yes'){

  var vegetarianQues = prompt('Are you a vegetarian?'); //start of vegetarian branch

  if (vegetarianQues === 'yes') //yes branch of vegetarian
    {var tofu = prompt ('Do you like tofu?');}
  if (tofu === 'yes')
                  {var salad = prompt ('Do you like salad?')} //Salad!!!

                        if(salad === 'yes')
                            {var oranges = prompt ('Do you like oranges?')}
                                  if (oranges === 'yes')
                                        {prompt('You should eat a tofu citris salad!!')} //final
                                  if (oranges === 'no')
                                        {prompt ('You should eat a eggless Ceasar salad with seitan! Yum!')} //final
                        if (salad === 'no')
                            {var choice = prompt ('Do you like wraps?')}
                                  if (choice === 'yes')
                                        {prompt ('Go eat a Mexican burrito with no meat')} //final
                                  if (choice === 'no')
                                        {prompt ('You are impossible. I can not help you. Starve!')} //final
                if (tofu ==='no') //don't like tofu branch
                  {var budget = prompt ('Are you on a budget? Like under $15?')}
                        if (budget === 'yes')
                          {var sandwich = prompt ('Do you like sandwiches?')}
                              if (sandwich === 'yes')
                            {prompt ()}
         if (vegetarianQues=== 'no')
          {var chicken = prompt ('Do you like chicken?')}


}

else if (start ==='no') {
     prompt ('Well then are you thirsty?')
}
