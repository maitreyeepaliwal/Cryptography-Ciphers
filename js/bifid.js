function encrypt(plaintext, keysquare, period)
{ 
    if(keysquare.length != 25){ alert("keysquare must be 25 characters in length"); return; }
    if(keysquare.indexOf("j") >= 0){ alert("key should not contain letter j (combine with i)."); return; }

    if(isNaN(period)){alert("period should be an integer"); return; }  ;
    if(period<=0){alert("period should greater than 0"); return; }  ;   
    ind = "12345";    ct1 = ""; ct2 = "";
    for(i=0; i<plaintext.length; i++){
        index = keysquare.indexOf(plaintext.charAt(i));
        ct1 += ind.charAt(index/5);
        ct2 += ind.charAt(index%5);
    }
    i = 0; ct3 = "";
    bit=ct1.substr(i,period);
    while(bit.length > 0){
        ct3 += bit + ct2.substr(i,period);
        i+=period;
        bit=ct1.substr(i,period);
    }
    ciphertext = "";
    for(i=0; i<ct3.length; i+=2){ ciphertext += keysquare.charAt((parseInt(ct3.charAt(i))-1)*5 + parseInt(ct3.charAt(i+1)-1));}
    return ciphertext;
}

function decrypt(ciphertext, keysquare, period)
{
    if(keysquare.length != 25){ alert("keysquare must be 25 characters in length"); return; }
    if(keysquare.indexOf("j") >= 0){ alert("key should not contain letter j (combine with i)."); return; }
   
    if(isNaN(period)){alert("period should be an integer"); return; }  ;
    if(period<=0){alert("period should greater than 0"); return; }  ;
    ind = "12345";   pt1 = "";
    for(i=0; i<ciphertext.length; i++){
        index = keysquare.indexOf(ciphertext.charAt(i));
        pt1 += ind.charAt(index/5) + ind.charAt(index%5);
    }
    i = 0; pt2 = ""; pt3 = "";
    while(pt1.length - i >= 2*period){
        pt2 += pt1.substr(i,period);
        pt3 += pt1.substr(i+period,period);
        i+=2*period;
    }
    k = (pt1.length - i)/2;
    if(k >= 1){pt2 += pt1.substr(i,k); pt3 += pt1.substr(i+k,k);}
    plaintext = "";
    for(i=0; i<pt2.length; i++){ plaintext += keysquare.charAt((parseInt(pt2.charAt(i))-1)*5 + parseInt(pt3.charAt(i)-1));}
    return plaintext;
}

function cipherButtonFunction(){
    var enteredKey = document.getElementById('enteredKey').value.toLowerCase().replace(/[^a-z]/g, "");
    var message = document.getElementById("inputMessage").value.toLowerCase().replace(/[^a-z]/g, "").replace(/[j]/g, "i"); 
    var period = document.getElementById("enteredperiod").value.toLowerCase().replace(/[^0-9]/g,"");

    if(enteredKey == "" || message == "" || period==""){
      alert("Please enter key and message and period to de ciphered/deciphered!");
      return;
    }
  
    var result = encrypt(message, enteredKey, period);
    document.getElementById("result").value = result;
  }
  
  // gets the message and key entered by user and deciphers it
  function decipherButtonFunction(){
    var enteredKey = document.getElementById('enteredKey').value.toLowerCase().replace(/[^a-z]/g, "");
    var message = document.getElementById("inputMessage").value.toLowerCase().replace(/[^a-z]/g, "").replace(/[j]/g, "i"); 
    var period = document.getElementById("enteredperiod").value.toLowerCase().replace(/[^0-9]/g,"");
    if(enteredKey == "" || message == "" || period==""){
      alert("Please enter key and message and period to de ciphered/deciphered!");
      return;
    }
  
    var result = decrypt(message, enteredKey, period);
    document.getElementById("result").value = result;
  }
