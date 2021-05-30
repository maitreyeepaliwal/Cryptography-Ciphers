
function encrypt(plaintext, key, pc)
{
    while(plaintext.length % key.length != 0) plaintext += pc.charAt(0);    
    var colLength = plaintext.length / key.length;
    var chars = "abcdefghijklmnopqrstuvwxyz"; 
    ciphertext = ""; k=0;
    for(i=0; i < key.length; i++){
        while(k<26){
            t = key.indexOf(chars.charAt(k));
            arrkw = key.split(""); arrkw[t] = "_"; key = arrkw.join("");
            if(t >= 0) break;
            else k++;
        }
        for(j=0; j < colLength; j++) ciphertext += plaintext.charAt(j*key.length + t);
    }
    return ciphertext;
}

function decrypt(ciphertext, key)
{
    klen = key.length;
    if(klen <= 1){ alert("Key should be at least 2 characters long"); return; }
    if(ciphertext.length % klen != 0){ alert("Ciphertext has not been padded, the result may be incorrect (incorrect keyword?)."); }
    // first we put the text into columns based on keyword length
    var cols = new Array(klen);
    var colLength = ciphertext.length / klen;
    for(i=0; i < klen; i++) cols[i] = ciphertext.substr(i*colLength,colLength);
    // now we rearrange the columns so that they are in their unscrambled state
    var newcols = new Array(klen);
    chars="abcdefghijklmnopqrstuvwxyz"; j=0;i=0;
    while(j<klen){
        t=key.indexOf(chars.charAt(i));        
        if(t >= 0){
            newcols[t] = cols[j++];
            arrkw = key.split(""); arrkw[t] = "_"; key = arrkw.join("");
        }else i++;         
    }    
    // now read off the columns row-wise
    plaintext = "";
    for(i=0; i < colLength; i++){
        for(j=0; j < klen; j++) plaintext += newcols[j].charAt(i);
    }            
    return plaintext;    
}

function cipherButtonFunction(){
    var message = document.getElementById('inputMessage').value.toLowerCase().replace(/[^a-z]/g, "");
    var key = document.getElementById("enteredKey").value.toLowerCase().replace(/[^a-z]/g, "");  
    var pc = document.getElementById("enteredpc").value.toLowerCase().replace(/[^a-z]/g, "");
    if( message == "" || key=="" || pc==""){
        alert("Please enter message or/and key or/and pad character to de ciphered/deciphered!");
        return;
      }
    var result = encrypt(message,key,pc);
    document.getElementById('result').value = result;
}

function decipherButtonFunction(){
    var message = document.getElementById('inputMessage').value.toLowerCase().replace(/[^a-z]/g, "");
    var key = document.getElementById("enteredKey").value.toLowerCase().replace(/[^a-z]/g, "");  
    if( message == "" || key==""){
        alert("Please enter message or/and key to de ciphered/deciphered!");
        return;
      }
    var result = decrypt(message,key);
    document.getElementById('result').value = result;
}
