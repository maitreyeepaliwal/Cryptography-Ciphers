function encrypt(message, key){    
    ciphertext="";
    for(i=0; i<message.length; i++){ 
        ciphertext += String.fromCharCode((((key.charCodeAt(i%key.length)-97) - (message.charCodeAt(i)-97)+26)%26)+97); 
    } 
    return ciphertext; 
}

function decrypt(message, key){    
    plaintext="";
    for(i=0; i<message.length; i++){ 
        plaintext += String.fromCharCode((( (key.charCodeAt(i%key.length)-97) - (message.charCodeAt(i)-97)+26)%26) + 97); 
    } 
    return plaintext; 
}

function cipherButtonFunction(){
    var message = document.getElementById('inputMessage').value.toLowerCase().replace(/[^a-z]/g, ""); 
    var enteredKey = document.getElementById('enteredKey').value.toLowerCase().replace(/[^a-z]/g, "");
    
  if(enteredKey == "" || message == ""){
    alert("Please enter key and message to de ciphered/deciphered!");
    return;
  }

  var result = encrypt(message, enteredKey);
  document.getElementById("result").value = result;
}

function decipherButtonFunction(){
    var message = document.getElementById('inputMessage').value.toLowerCase().replace(/[^a-z]/g, ""); 
    var enteredKey = document.getElementById('enteredKey').value.toLowerCase().replace(/[^a-z]/g, "");

  if(enteredKey == "" || message == ""){
    alert("Please enter key and message to de ciphered/deciphered!");
    return;
  }

  var result = decrypt(message, enteredKey);
  document.getElementById("result").value = result;
}