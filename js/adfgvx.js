function encrypt(plaintext, keysquare, keyword)
{ 
    if(keysquare.length != 36){ alert("keysquare must be 36 characters in length"); return; }
    if(keyword.length <= 1){ alert("keyword should be at least 2 characters long"); return; }
    // first use polybius square to encipher plaintext
    adfgvx = "ADFGVX";    ciphertext1 = "";
    for(i=0; i<plaintext.length; i++){
        index = keysquare.indexOf(plaintext.charAt(i));
        ciphertext1 += adfgvx.charAt(index/6) + adfgvx.charAt(index%6);
    }
    // if the length of the cipher text is wrong, append some 'x's
    var colLength = ciphertext1.length / keyword.length;
    var chars = "abcdefghijklmnopqrstuvwxyz"; 
    ciphertext = ""; k=0;
    for(i=0; i < keyword.length; i++){
        while(k<26){
            t = keyword.indexOf(chars.charAt(k));
            arrkw = keyword.split(""); arrkw[t] = "_"; keyword = arrkw.join("");
            if(t >= 0) break;
            else k++;
        }
        for(j=0; j < colLength; j++) ciphertext += ciphertext1.charAt(j*keyword.length + t);
    }
    return ciphertext;
}

function decrypt(ciphertext, keysquare, keyword)
{
    klen = keyword.length;
    var re = /[^adfgvx]/;

    // do some error checking
    if(ciphertext.length < 1){ alert("please enter some ciphertext (letters only)"); return; }    
    if(re.test(ciphertext)){alert("ciphertext can only contain A,D,F,G,V or X characters."); return;};
    if(ciphertext.length % 2 != 0){ alert("number of ciphertext characters must be even"); return; }  
    if(keysquare.length != 36){ alert("keysquare must be 36 characters in length"); return; }
    if(klen <= 1){ alert("keyword should be at least 2 characters long"); return; }
    var numLongCols = ciphertext.length % klen;
    var cols = new Array(klen);
    var colLength = Math.floor(ciphertext.length / klen);
    // now we rearrange the columns so that they are in their unscrambled state
    chars="abcdefghijklmnopqrstuvwxyz";i=0;upto=0;
    for(j=0;j<klen;){
        t=keyword.indexOf(chars.charAt(i));        
        if(t >= 0){
            if(t<numLongCols) cl = colLength+1;
            else cl = colLength;
            cols[t] = ciphertext.substr(upto,cl);
            upto = upto+cl;
            arrkw = keyword.split(""); arrkw[t] = "_"; keyword = arrkw.join("");
            j++;
        }else i++;         
    }    
    // now read off the columns row-wise
    plaintext1 = "";
    for(j=0; j < colLength+1; j++){
    for(i=0; i < klen; i++){
         plaintext1 += cols[i].charAt(j);
    }}
    // now undo the polybius square
    adfgvx = "adfgvx"; plaintext = "";
    for(i=0; i<plaintext1.length; i+=2){
        keyindex = adfgvx.indexOf(plaintext1.charAt(i))*6 + adfgvx.indexOf(plaintext1.charAt(i+1));
        plaintext += keysquare.charAt(keyindex);
    }
    return plaintext;
}

function cipherButtonFunction(){
    var enteredKeysquare = document.getElementById('enteredKeysquare').value.toLowerCase().replace(/[^a-z0-9]/g, "");
    var enteredKeyword = document.getElementById('enteredKeyword').value.toLowerCase().replace(/[^a-z]/g, "");
    var message = document.getElementById("inputMessage").value.toLowerCase().replace(/[^a-z0-9]/g, "");
  
    if(enteredKeysquare == "" || message == "" || enteredKeyword ==""){
      alert("Please enter key and message to de ciphered/deciphered!");
      return;
    }
  
    var result = encrypt(message, enteredKeysquare, enteredKeyword);
    document.getElementById("result").value = result;
  }
  
  // gets the message and key entered by user and deciphers it
  function decipherButtonFunction(){
    var enteredKeysquare = document.getElementById('enteredKeysquare').value.toLowerCase().replace(/[^a-z0-9]/g, "");
    var enteredKeyword = document.getElementById('enteredKeyword').value.toLowerCase().replace(/[^a-z]/g, "");
    var message = document.getElementById("inputMessage").value.toLowerCase().replace(/[^a-z0-9]/g, "");
  
    if(enteredKeysquare == "" || message == "" || enteredKeyword ==""){
      alert("Please enter key and message to de ciphered/deciphered!");
      return;
    }
  
    var result = decrypt(message, enteredKeysquare, enteredKeyword);
    document.getElementById("result").value = result;
  }