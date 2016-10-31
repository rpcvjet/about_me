'use strict';
var x = 0 + 2;
var y = 0 - 2;

$('img').on('mousedown', function () {
  $(this).css('box-shadow', x + 'px ' + y + 'px ',
                            x + 'px ' + x + 'px ' );
  x++;
  y--;
  console.log(y);
}); //end of function
