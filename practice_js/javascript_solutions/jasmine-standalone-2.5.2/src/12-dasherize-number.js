// # Write a method that takes in a number and returns a string, placing
// # a single dash before and after each odd digit. There is one
// # exception: don't start or end the string with a dash.
// #
function dasherizeNumber(number){
  var return_string = []
  var string_number = number.toString();
  string_number.split("").forEach(function(digit,index){
    if(odd(digit)){
      if(index != 0 && index != string_number.length - 1){
        return_string.push("-");
        return_string.push(digit);
        return_string.push("-")
      }
      else if(index == 0){
        return_string.push(digit);
        return_string.push("-");
      }
      else if (index == string_number.length - 1){
        return_string.push("-");
        return_string.push(digit);
      }
    }
    else{
      return_string.push(digit);
    }
  });
 return_string = return_string.join("");
 return return_string.replace(/--/g,'-');
}

function odd(number){
  if (number % 2 == 0){
    return false;
  }else{
    return true;
  }
}