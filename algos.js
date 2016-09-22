Stack 2 Algorithms
1. Create a 10 X 10 array and randomly fill each cell with "D" or "E".
function tenByten(rows, cols) {
  var arr = [];
  for(var i = 0; i < rows - 1; i++) {
    arr[i] = [];
    arr.push(arr[i]);
    for(var k = 0; k < cols; k++) {
      var rand = "";
      var letters = "DE";
      for(var r = 0; r < 1; r++) {
        rand += letters.charAt(Math.floor(Math.random() * letters.length));
      }
      arr[i][k] = rand;
    }
  }
  console.log(arr);
}
tenByten(10, 10);

2. Add all the values between 100 and 4000000 inclusively that are divisible by 3 or 5 but not both 3 and 5.
function threeOrFive(){
  var sum = 0;
  for(var i = 100; i <= 4000000; i++){
    if(i % 3 == 0 || i % 5 == 0 && !(i % 3 == 0 && i % 5 == 0)){
      sum += i;
    }
  }
  console.log(sum);
}
threeOrFive();
