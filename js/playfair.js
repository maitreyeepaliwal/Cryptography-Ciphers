function encrypt(plaintext, keysquare)
{ 
    if(keysquare.length != 25){ alert("keysquare must be 25 characters in length"); return; }
    while(plaintext.length % 2 != 0) plaintext += "x";
    ciphertext = "";
    for(i=0; i<plaintext.length; i+=2){
        a = plaintext.charAt(i); b = plaintext.charAt(i+1); 
        if(a == b) b = "x";
        row1 = parseInt(keysquare.indexOf(a) / 5);
        col1 = keysquare.indexOf(a) % 5;
        row2 = parseInt(keysquare.indexOf(b) / 5);
        col2 = keysquare.indexOf(b) % 5;
        if(row1 == row2){
            if(col1 == 4) c = keysquare.charAt(row1*5);
            else c = keysquare.charAt(row1*5 + col1 + 1);
            if(col2 == 4) d = keysquare.charAt(row2*5);
            else d = keysquare.charAt(row2*5 + col2 + 1);
        }else if(col1 == col2){
            if(row1 == 4) c = keysquare.charAt(col1);
            else c = keysquare.charAt((row1+1)*5 + col1);
            if(row2 == 4) d = keysquare.charAt(col2);
            else d = keysquare.charAt((row2+1)*5 + col2);
        }else{
            c = keysquare.charAt(row1*5 + col2);
            d = keysquare.charAt(row2*5 + col1);
        }
        
        ciphertext += c + d;
    }
    return ciphertext.toUpperCase();
}

function decrypt(ciphertext, keysquare)
{
    if(ciphertext.length < 1){ alert("please enter some ciphertext (letters only)"); return; }   
    if(ciphertext.length % 2 != 0){ alert("ciphertext length must be even."); return; }    
    if(keysquare.length != 25){ alert("keysquare must be 25 characters in length"); return; }

    plaintext = "";
    for(i=0; i<ciphertext.length; i+=2){
        a = ciphertext.charAt(i); b = ciphertext.charAt(i+1); 
        row1 = parseInt(keysquare.indexOf(a) / 5);
        col1 = keysquare.indexOf(a) % 5;
        row2 = parseInt(keysquare.indexOf(b) / 5);
        col2 = keysquare.indexOf(b) % 5;
        if(row1 == row2){
            if(col1 == 0) c = keysquare.charAt(row1*5 + 4);
            else c = keysquare.charAt(row1*5 + col1 - 1);
            if(col2 == 0) d = keysquare.charAt(row2*5 + 4);
            else d = keysquare.charAt(row2*5 + col2 - 1);
        }else if(col1 == col2){
            if(row1 == 0) c = keysquare.charAt(20 + col1);
            else c = keysquare.charAt((row1-1)*5 + col1);
            if(row2 == 0) d = keysquare.charAt(20 + col2);
            else d = keysquare.charAt((row2-1)*5 + col2);
        }else{
            c = keysquare.charAt(row1*5 + col2);
            d = keysquare.charAt(row2*5 + col1);
        }
        plaintext += c + d;
    }
    return plaintext.toUpperCase();
}

function cipherButtonFunction(){
    var enteredKey = document.getElementById('enteredKey').value.toLowerCase().replace(/[^a-z]/g, "");
    var message = document.getElementById("inputMessage").value.toLowerCase().replace(/[^a-z]/g, "").replace(/[j]/g, "i"); 
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
    var message = document.getElementById("inputMessage").value.toLowerCase().replace(/[^a-z0-9]/g, "").replace(/[j]/g, "i");
  
    if(enteredKey == "" || message == ""){
      alert("Please enter key and message to de ciphered/deciphered!");
      return;
    }
  
    var result = decrypt(message, enteredKey);
    document.getElementById("result").value = result;
  }