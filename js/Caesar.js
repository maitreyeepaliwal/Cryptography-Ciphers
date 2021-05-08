var caesarShiftencrypt = function (plaintext, enteredKey) {
   ciphertext = "";   
    var re = /[a-z]/;
  for(i=0; i<plaintext.length; i++){ 
      if(re.test(plaintext.charAt(i))) ciphertext += String.fromCharCode((plaintext.charCodeAt(i) - 97 + enteredKey)%26 + 97); 
      else ciphertext += plaintext.charAt(i); 
  } 
  return ciphertext; 
}
  
var caesarShiftdecrypt = function (ciphertext, enteredKey) {
plaintext = "";    var re = /[a-z]/;
for(i=0; i<ciphertext.length; i++){ 
    if(re.test(ciphertext.charAt(i))) plaintext += String.fromCharCode((ciphertext.charCodeAt(i) - 97 + 26 - enteredKey)%26 + 97); 
    else plaintext += ciphertext.charAt(i); 
} 
return plaintext; 
}

function caesarcipherButtonFunction(){
    var enteredKey = parseInt(document.getElementById("enteredKey").value);
    var message = document.getElementById('inputMessage').value.toLowerCase();;
    if(enteredKey == "" || message == ""){
        alert("Please enter key and message to de ciphered/deciphered!");
        return;
      }
    var result = caesarShiftencrypt(message, enteredKey);
    document.getElementById('result').value = result;
}

function caesardecipherButtonFunction(){
    var enteredKey = document.getElementById('enteredKey').value;
    var message = document.getElementById('inputMessage').value;
    if(enteredKey == "" || message == ""){
        alert("Please enter key and message to de ciphered/deciphered!");
        return;
      }
    var result = caesarShiftdecrypt(message, enteredKey);
    document.getElementById('result').value = result;
}
