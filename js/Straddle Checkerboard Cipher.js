function encrypt(plaintext, key, num)
{ 
    if(plaintext.length < 1){ alert("please enter some plaintext (letters only)"); return; }    
    if(key.length != 26){ alert("keysquare must be 26 characters in length"); return; }
    if(num.length != 2){ alert("there must be 2 numbers provided also e.g. '3 7'"); return; }
    ciphertext=""; //num[1] = num[1]-1;
    for(i=0; i<plaintext.length; i++){
    	ind = key.indexOf(plaintext.charAt(i));
    	if(ind < num[0]) { ciphertext += ind; }
    	else if((ind >= num[0]) && (ind < num[1]-1)) { ciphertext += (ind+1); }
      else if((ind >= num[1]-1) && (ind < 8)) { ciphertext += (ind+2); } 	
    	else if(ind < 18) { ciphertext += num[0] + "" + (ind-8); }
    	else {ciphertext += num[1] +""+ (ind-18); }
    }
    return ciphertext;
}

function decrypt(ciphertext, key, num)
{
    if(key.length != 26){ alert("keysquare must be 26 characters in length"); return; }
    if(num.length != 2){ alert("there must be 2 numbers provided also e.g. '3 7'"); return; }
    plaintext="";
    for(i=0; i<ciphertext.length; i++){
        if(parseInt(ciphertext.charAt(i)) == num[0]){
                if (ciphertext.length == i+1){
                    alert("invalid final ciphertext character: "+num[0]);
                    plaintext += "?";
                }else{
                    plaintext += key.charAt( parseInt(ciphertext.charAt(++i)) +8);
                }
    	}else if(parseInt(ciphertext.charAt(i)) == num[1]){
                if (ciphertext.length == i+1){
                    alert("invalid final ciphertext character: "+num[1]);
                    plaintext += "?";
                }else{
                temp = parseInt(ciphertext.charAt(++i)) +18;
                if (temp > 25){ 
                   alert("invalid ciphertext sequence: "+num[1]+ciphertext.charAt(i));
                   plaintext += "?";
                }else{
    		   plaintext += key.charAt( temp);
                }}
    	}else{
    	  n = parseInt(ciphertext.charAt(i));
    	  if(n < num[0]) plaintext += key.charAt(n);
    	  else if(n < num[1]) plaintext += key.charAt(n-1);
    	  else plaintext += key.charAt(n-2);
      }
    }
    return plaintext;
}

function cipherButtonFunction(){
    var enteredKey = document.getElementById('enteredKey').value.toLowerCase().replace(/[^a-z]/g, "");
    var message = document.getElementById("inputMessage").value.toLowerCase().replace(/[^a-z]/g, ""); 
    var enteredspare = document.getElementById("enteredspare").value.replace(/[^0-9]/g, "");

    if(enteredKey == "" || message == "" || enteredspare==""){
      alert("Please enter key and message and spare positions to de ciphered/deciphered!");
      return;
    }
    var result = encrypt(message, enteredKey, enteredspare);
    document.getElementById("result").value = result;
  
  }
  
  // gets the message and key entered by user and deciphers it
  function decipherButtonFunction(){
    var enteredKey = document.getElementById('enteredKey').value.toLowerCase().replace(/[^a-z]/g, "");
    var message = document.getElementById("inputMessage").value.toLowerCase().replace(/[^0-9]/g, "");  
    var enteredspare = document.getElementById("enteredspare").value.replace(/[^0-9]/g, "");

    if(enteredKey == "" || message == "" || enteredspare== ""){
      alert("Please enter key and message and spare positions to de ciphered/deciphered!");
      return;
    }
    var result = decrypt(message, enteredKey, enteredspare);
    document.getElementById("result").value = result;
  }