function encrypt(plaintext, k1, k2)
{ 
    if(k1.length != 25 || k2.length != 25){ alert("keysquare must be 25 characters in length"); return; }
    if(plaintext.length % 2 == 1) plaintext += "x";
    ciphertext = ""; 
    rt = "abcdefghiklmnopqrstuvwxyz";
    for(i=0; i<plaintext.length; i+=2){
        a = (rt.indexOf(plaintext.charAt(i)) % 5);
        b = parseInt(rt.indexOf(plaintext.charAt(i)) / 5);
        c = (rt.indexOf(plaintext.charAt(i+1)) % 5);
        d = parseInt(rt.indexOf(plaintext.charAt(i+1)) / 5);
        ciphertext += k1.charAt(5*b + c);
        ciphertext += k2.charAt(5*d + a);
    }
    return ciphertext.toUpperCase();
}

function decrypt(ciphertext, k1, k2)
{
    if(ciphertext.length < 1){ alert("please enter some plaintext (letters and numbers only)"); return; }    
    if(k1.length != 25 || k2.length != 25){ alert("keysquare must be 25 characters in length"); return; }
    if(ciphertext.length % 2 == 1){alert("ciphertext should be even length (wrong algorithm?)"); return; }
    plaintext = ""; 
    rt = "abcdefghiklmnopqrstuvwxyz";
    for(i=0; i<ciphertext.length; i+=2){
        a = (k1.indexOf(ciphertext.charAt(i)) % 5); 
        b = parseInt(k1.indexOf(ciphertext.charAt(i)) / 5); 
        c = (k2.indexOf(ciphertext.charAt(i+1)) % 5); 
        d = parseInt(k2.indexOf(ciphertext.charAt(i+1)) / 5); 
        plaintext += rt.charAt(5*b + c);
        plaintext += rt.charAt(5*d + a);
    }
    return plaintext.toUpperCase();
}

function cipherButtonFunction(){
    var enteredKey1 = document.getElementById('enteredKey1').value.toLowerCase().replace(/[^a-z]/g, "");
    var enteredKey2 = document.getElementById('enteredKey2').value.toLowerCase().replace(/[^a-z]/g, "");
    var message = document.getElementById("inputMessage").value.toLowerCase().replace(/[^a-z]/g, ""); 
    if(enteredKey1 == "" || message == "" || enteredKey2 == ""){
      alert("Please enter key and message to de ciphered/deciphered!");
      return;
    }
    var result = encrypt(message, enteredKey1, enteredKey2);
    document.getElementById("result").value = result;
  
  }
  
  function decipherButtonFunction(){
    var enteredKey1 = document.getElementById('enteredKey1').value.toLowerCase().replace(/[^a-z]/g, "");
    var enteredKey2 = document.getElementById('enteredKey2').value.toLowerCase().replace(/[^a-z]/g, "");
    var message = document.getElementById("inputMessage").value.toLowerCase().replace(/[^a-z]/g, "");
  
    if(enteredKey1 == "" || message == "" || enteredKey2 == ""){
      alert("Please enter key and message to de ciphered/deciphered!");
      return;
    }
  
    var result = decrypt(message, enteredKey1, enteredKey2);
    document.getElementById("result").value = result;
  }