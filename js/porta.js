function encrypt(plaintext, k)
{ 
    if(k.length <= 1){ alert("keyword should be at least 2 characters long"); return; }
    ciphertext="";
    for(i=0; i<plaintext.length; i++){ 
            j = i%k.length;
            //alert(j + ' ' + k[j]+' '+plaintext[i])
            if      ((k[j] == 'a') || (k[j] == 'b')) ciphertext += 'nopqrstuvwxyzabcdefghijklm'[plaintext.charCodeAt(i)-97];
            else if ((k[j] == 'y') || (k[j] == 'z')) ciphertext += 'znopqrstuvwxybcdefghijklma'[plaintext.charCodeAt(i)-97];
            else if ((k[j] == 'w') || (k[j] == 'x')) ciphertext += 'yznopqrstuvwxcdefghijklmab'[plaintext.charCodeAt(i)-97];
            else if ((k[j] == 'u') || (k[j] == 'v')) ciphertext += 'xyznopqrstuvwdefghijklmabc'[plaintext.charCodeAt(i)-97];
            else if ((k[j] == 's') || (k[j] == 't')) ciphertext += 'wxyznopqrstuvefghijklmabcd'[plaintext.charCodeAt(i)-97];
            else if ((k[j] == 'q') || (k[j] == 'r')) ciphertext += 'vwxyznopqrstufghijklmabcde'[plaintext.charCodeAt(i)-97];
            else if ((k[j] == 'o') || (k[j] == 'p')) ciphertext += 'uvwxyznopqrstghijklmabcdef'[plaintext.charCodeAt(i)-97];
            else if ((k[j] == 'm') || (k[j] == 'n')) ciphertext += 'tuvwxyznopqrshijklmabcdefg'[plaintext.charCodeAt(i)-97];
            else if ((k[j] == 'k') || (k[j] == 'l')) ciphertext += 'stuvwxyznopqrijklmabcdefgh'[plaintext.charCodeAt(i)-97];
            else if ((k[j] == 'i') || (k[j] == 'j')) ciphertext += 'rstuvwxyznopqjklmabcdefghi'[plaintext.charCodeAt(i)-97];
            else if ((k[j] == 'g') || (k[j] == 'h')) ciphertext += 'qrstuvwxyznopklmabcdefghij'[plaintext.charCodeAt(i)-97];
            else if ((k[j] == 'e') || (k[j] == 'f')) ciphertext += 'pqrstuvwxyznolmabcdefghijk'[plaintext.charCodeAt(i)-97];
            else if ((k[j] == 'c') || (k[j] == 'd')) ciphertext += 'opqrstuvwxyznmabcdefghijkl'[plaintext.charCodeAt(i)-97];
    } 
    return ciphertext;
}

function decrypt(ciphertext, k)
{
    if(k.length <= 1){ alert("keyword should be at least 2 characters long"); return; }
    plaintext="";
    for(i=0; i<ciphertext.length; i++){ 
            j = i%k.length;
            if      ((k[j] == 'a') || (k[j] == 'b')) plaintext += 'nopqrstuvwxyzabcdefghijklm'[ciphertext.charCodeAt(i)-97];
            else if ((k[j] == 'y') || (k[j] == 'z')) plaintext += 'znopqrstuvwxybcdefghijklma'[ciphertext.charCodeAt(i)-97];
            else if ((k[j] == 'w') || (k[j] == 'x')) plaintext += 'yznopqrstuvwxcdefghijklmab'[ciphertext.charCodeAt(i)-97];
            else if ((k[j] == 'u') || (k[j] == 'v')) plaintext += 'xyznopqrstuvwdefghijklmabc'[ciphertext.charCodeAt(i)-97];
            else if ((k[j] == 's') || (k[j] == 't')) plaintext += 'wxyznopqrstuvefghijklmabcd'[ciphertext.charCodeAt(i)-97];
            else if ((k[j] == 'q') || (k[j] == 'r')) plaintext += 'vwxyznopqrstufghijklmabcde'[ciphertext.charCodeAt(i)-97];
            else if ((k[j] == 'o') || (k[j] == 'p')) plaintext += 'uvwxyznopqrstghijklmabcdef'[ciphertext.charCodeAt(i)-97];
            else if ((k[j] == 'm') || (k[j] == 'n')) plaintext += 'tuvwxyznopqrshijklmabcdefg'[ciphertext.charCodeAt(i)-97];
            else if ((k[j] == 'k') || (k[j] == 'l')) plaintext += 'stuvwxyznopqrijklmabcdefgh'[ciphertext.charCodeAt(i)-97];
            else if ((k[j] == 'i') || (k[j] == 'j')) plaintext += 'rstuvwxyznopqjklmabcdefghi'[ciphertext.charCodeAt(i)-97];
            else if ((k[j] == 'g') || (k[j] == 'h')) plaintext += 'qrstuvwxyznopklmabcdefghij'[ciphertext.charCodeAt(i)-97];
            else if ((k[j] == 'e') || (k[j] == 'f')) plaintext += 'pqrstuvwxyznolmabcdefghijk'[ciphertext.charCodeAt(i)-97];
            else if ((k[j] == 'c') || (k[j] == 'd')) plaintext += 'opqrstuvwxyznmabcdefghijkl'[ciphertext.charCodeAt(i)-97];
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