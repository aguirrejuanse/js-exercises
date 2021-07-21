function DecimalToBynary(num) {
  // Your code here:
  let string = '';
  while(num){
    let modulo = num % 2;
    // console.log(string);
    string = modulo + string;
    num = Math.floor(num/2);
  }
  return string;
}

console.log(DecimalToBynary(26));
