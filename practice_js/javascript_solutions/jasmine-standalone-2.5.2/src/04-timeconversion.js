// # Write a method that will take in a number of minutes, and returns a
// # string that formats the number into `hours:minutes`.
function convertTime(time){
    var hrs = Math.floor((time / 60)).toString();
    var mins = (time % 60).toString();
    
    if (parseInt(mins) < 10){
        mins = "0" + mins;
    }
    return hrs + ":" + mins;
    }