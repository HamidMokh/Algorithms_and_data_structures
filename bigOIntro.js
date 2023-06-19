function addUpTo(n) {
    return n * (n + 1) / 2;
  }
  
  var time1 = performance.now();
  addUpTo(1000000000);
  var time2 = performance.now();
  console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)

//   using this method we can calculate the exution time,but this is not reliable, so, we will try to determine the number of 
// operations which can be n this time
