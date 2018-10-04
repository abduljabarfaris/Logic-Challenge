function bandingkanangka(angka1,angka2) {
  var angka;
  if (angka1 === angka2){
  return -1;
    }
  return angka1 < angka2
}

//TEST CASES
console.log(bandingkanangka(5, 8)); // true
console.log(bandingkanangka(5, 3)); // false
console.log(bandingkanangka(4, 4)); // -1
