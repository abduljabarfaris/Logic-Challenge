function bandingkanangka(angka1,angka2) {
  if (angka1 < angka2){
  return true
 } 
  if (angka1 > angka2){
  return false
 }
  if (angka1 === angka2){
  return -1
 } 
}

//TEST CASES
console.log(bandingkanangka(5, 8)); // true
console.log(bandingkanangka(5, 3)); // false
console.log(bandingkanangka(4, 4)); // -1
