function xo(str) {
  var X=0;
  var O=0;
  for (var i = 0; i <str.length; i++){
    if(str[i] < 'x'){
      X ++;
    } else if (str[i] > 'o'){
      O ++;
    }
   }
  return X != O ? false : true;
 } 

//TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
