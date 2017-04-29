// Write a method that will take in a number of minutes, and returns a
// string that formats the number into `hours:minutes`.

function time_convert(minutes){
  const hrs = Math.floor(minutes/60).toString();
  var mins = (minutes % 60).toString();
  
  if (parseInt(mins) < 10){
    mins = "0" + mins;
    }
    return hrs + ":" + mins;
}

console.log(time_convert(150) =="2:30");
console.log(time_convert(15) =="0:15");
console.log(time_convert(360) =="6:00");