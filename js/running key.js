function encrypt(plaintext, k)
{ 
    if(k.length <= 1){ alert("keyword should be at least 2 characters long"); return; }
    if(k.length <= plaintext.length){ alert("key stream should be at least as long as plaintext"); return; }
    ciphertext="";
    for(i=0; i<plaintext.length; i++){
        ciphertext += String.fromCharCode((((plaintext.charCodeAt(i)-97) + (k.charCodeAt(i%k.length)-97)+26)%26)+97);
    }
    return ciphertext;
}

function decrypt(ciphertext, k)
{
    if(k.length <= 1){ alert("keyword should be at least 2 characters long"); return; }
    if(k.length <= ciphertext.length){ alert("key stream should be at least as long as ciphertext"); return; }
    plaintext="";
    for(i=0; i<ciphertext.length; i++){
        plaintext += String.fromCharCode((((ciphertext.charCodeAt(i)-97) - (k.charCodeAt(i%k.length)-97)+26)%26)+97);
    }
    return plaintext;
}

function cipherButtonFunction(){
    var enteredKey = document.getElementById('enteredKey').value.toLowerCase().replace(/[^a-z]/g, "");
    var message = document.getElementById("inputMessage").value.toLowerCase().replace(/[^a-z]/g, ""); 
    if(enteredKey == "" || message == ""){
      alert("Please enter key and message to de ciphered/deciphered!");
      return;
    }
    var result = encrypt(message, enteredKey);
    document.getElementById("result").value = result;
  
  }
  
  // gets the message and key entered by user and deciphers it
  function decipherButtonFunction(){
    var enteredKey = document.getElementById('enteredKey').value.toLowerCase().replace(/[^a-z]/g, "");
    var message = document.getElementById("inputMessage").value.toLowerCase().replace(/[^a-z]/g, "");
  
    if(enteredKey == "" || message == ""){
      alert("Please enter key and message to de ciphered/deciphered!");
      return;
    }
  
    var result = decrypt(message, enteredKey);
    document.getElementById("result").value = result;
  }