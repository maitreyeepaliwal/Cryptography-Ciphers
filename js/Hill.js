function encrypt(plaintext, k)
{ 
    keys = k.split(" "); 
    if(plaintext.length % 2 == 1){ plaintext = plaintext + "x"; }    
    if(keys.length != 4){ alert("key should consist of 4 integers"); return; }
    for(i=0;i<4;i++) keys[i] = keys[i]%26;
    ciphertext="";
    for(i=0; i<plaintext.length; i+=2){ 
      ciphertext += String.fromCharCode((keys[0]*(plaintext.charCodeAt(i)-97) + keys[1]*(plaintext.charCodeAt(i+1)-97))%26 + 97); 
      ciphertext += String.fromCharCode((keys[2]*(plaintext.charCodeAt(i)-97) + keys[3]*(plaintext.charCodeAt(i+1)-97))%26 + 97); 
    } 
    return ciphertext; 
}

function decrypt(ciphertext, k)
{
    keys = k.split(" "); 
    if(ciphertext.length % 2 == 1){ alert("ciphertext is not divisible by 2 (wrong algorithm?)"); return; }
    if(keys.length != 4){ alert("key should consist of 4 integers"); return; }
    for(i=0;i<4;i++) keys[i] = keys[i]%26;
    det = keys[0]*keys[3] - keys[1]*keys[2];
    det = ((det%26)+26)%26;
    di=0;
    for(i=0;i<26;i++){ if((det*i)%26 == 1) di = i; }
    if(di == 0){alert("could not invert, try different key"); return; }
    ikeys = new Array(4);
    ikeys[0] = (di*keys[3])%26; ikeys[1] = (-1*di*keys[1])%26;
    ikeys[2] = (-1*di*keys[2])%26; ikeys[3] = di*keys[0];
    for(i=0;i<4;i++){ if(ikeys[i] < 0) ikeys[i] += 26; }
    plaintext="";
    for(i=0; i<ciphertext.length; i+=2){ 
      plaintext += String.fromCharCode((ikeys[0]*(ciphertext.charCodeAt(i)-97) + ikeys[1]*(ciphertext.charCodeAt(i+1)-97))%26 + 97); 
      plaintext += String.fromCharCode((ikeys[2]*(ciphertext.charCodeAt(i)-97) + ikeys[3]*(ciphertext.charCodeAt(i+1)-97))%26 + 97); 
    } 
    return plaintext;
}

function cipherButtonFunction(){
    var enteredKey = document.getElementById('enteredKey').value.toLowerCase().replace(/[^0-9 ]/g, "");
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
    var enteredKey = document.getElementById('enteredKey').value.toLowerCase().replace(/[^0-9 ]/g, "");
    var message = document.getElementById("inputMessage").value.toLowerCase().replace(/[^a-z]/g, "");
    if(enteredKey == "" || message == ""){
      alert("Please enter key and message to de ciphered/deciphered!");
      return;
    }
  
    var result = decrypt(message, enteredKey);
    document.getElementById("result").value = result;
  }