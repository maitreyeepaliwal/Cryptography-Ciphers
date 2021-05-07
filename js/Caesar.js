var caesarShift = function (message, enteredKey) {
    
    if (enteredKey < 0) {
      return caesarShift(message, enteredKey+ 26);
    }
  
    // Make an output variable
    var output = "";
  
    
    // Go through each character
    for (var i = 0; i < message.length; i++) {
        var c;
        // Get its code
        var code = (message.charCodeAt(i)); 
  
        // Uppercase letters
        if (code >= 65 && code <= 90) {
          c = String.fromCharCode(((code - 65 + parseInt(enteredKey)) % 26) + 65);
        }
  
        // Lowercase letters
        else if (code >= 97 && code <= 122) {
          c = String.fromCharCode(((code - 97 + parseInt(enteredKey)) % 26) + 97);
          
        }
        output += c;
    }
    
    return output;
}
  


function caesarcipherButtonFunction(){
    var enteredKey = document.getElementById('enteredKey').value;
    var message = document.getElementById('inputMessage').value;
    if(enteredKey == "" || message == ""){
        alert("Please enter key and message to de ciphered/deciphered!");
        return;
      }
    var result = caesarShift(message, enteredKey);
    document.getElementById('result').value = result;
}

function caesardecipherButtonFunction(){
    var enteredKey = document.getElementById('enteredKey').value;
    var message = document.getElementById('inputMessage').value;
    if(enteredKey == "" || message == ""){
        alert("Please enter key and message to de ciphered/deciphered!");
        return;
      }
    var result = caesarShift(message, parseInt(-enteredKey));
    document.getElementById('result').value = result;
}
