// reverses a string
function reverseString(string){
  var reversedString = "";
  for (var i = string.length -1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}

// divides a string into two equal parts. If the string length is odd it adds a space at the end
// returns two length equal strings
function divide(string){
  if(string.length % 2 != 0){
    string += " ";
  }
  var middle = (string.length / 2);
  return [string.substring(0, middle), string.substring(middle, string.length)];
}

// splits a string in half and zips them together after they have been reversed
function zip(string){
  var string1 = reverseString(divide(string)[0]);
  var string2 = reverseString(divide(string)[1]);
  var result = "";
  for (var i = 0; i < string1.length; i++) {
    result += string1[i]+string2[i];
  }
  return result;
}

// unzips the encoded message, reverses the two strings and joins them together
function unzip(string){
  var string1 = "";
  var string2 = "";
  for (var i = 0; i < string.length; i++) {
    if(i % 2 == 0){
      string1 += string[i];
    }else {
      string2 += string[i];
    }
  }

  return reverseString(string1) + reverseString(string2);
}
// ciphers a message
function zipMessage(){
  var message = document.getElementById("inputMessage").value;
  if(message == ""){
    alert("Please enter a message to zip/unzip!");
    return;
  }
  var result = zip(message);
  document.getElementById("result").value = result;
}

// document.getElementsByClassName('zipMethod').onclick = zipMessage();

function unzipMessage(){
  var message = document.getElementById("inputMessage").value;
  if(message == ""){
    alert("Please enter a message to zip/unzip!");
    return;
  }
  var result = unzip(message);
  document.getElementById("result").value = result;
}