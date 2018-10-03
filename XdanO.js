function xo(str) {
  var tX=0;
  var tO=0;
  for (var x = 0; x <str.length; x++){
    if(str[x] === 'x'){
      tX ++;
    } else if (str[x] === 'o'){
      tO ++;
    }
  return X === O;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
