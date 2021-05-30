function encrypt(message){    
    var shift =13;
    ciphertext = "";    
    var re = /[a-z]/;
    for(i=0; i<message.length; i++){ 
        if(re.test(message.charAt(i))) 
        ciphertext += String.fromCharCode((message.charCodeAt(i) - 97 + shift)%26 + 97); 
        else ciphertext += message.charAt(i); 
    } 
    return ciphertext; 
}

function cipherButtonFunction(){
    var message = document.getElementById('inputMessage').value;
    if( message == ""){
        alert("Please enter message to de ciphered/deciphered!");
        return;
      }
    var result = encrypt(message);
    document.getElementById('result').value = result;
}

function decipherButtonFunction(){
    var message = document.getElementById('inputMessage').value;
    if(message == ""){
        alert("Please enter message to de ciphered/deciphered!");
        return;
      }
    var result = encrypt(message);
    document.getElementById('result').value = result;
}