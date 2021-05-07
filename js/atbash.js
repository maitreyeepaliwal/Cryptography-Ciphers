let alphabet = "abcdefghijklmnopqrstuvwxyz";
let fixedKey = "zyxwvutsrqponmlkjihgfedcba";

function isUpperCase(letter) {
    let charCode = letter.charCodeAt(0);
    if(charCode >= 65 && charCode <= 90) {
        return true;
    } else {
        return false;
    }
}

function isLowerCase(letter) {
    let charCode = letter.charCodeAt(0);
    if(charCode >= 97 && charCode <= 122) {
        return true;
    } else {
        return false;
    }
}

var atbash = function (message) {
  
    // Make an output variable
    var encrypted = "";
    for (let i = 0; i < message.length; i++) {
        let index = 0;
        if(isUpperCase(message[i])) {
            let reversedIndex = 0;

            let lower = message[i].toLowerCase();
            index = fixedKey.indexOf(lower);

            if(index < 0 && index >= -27) {
                reversedIndex = index * (-1);
            } else {
                reversedIndex = index;
            }

            let tempIndex = reversedIndex - 1 - 24;
            if(tempIndex < 0) {
                tempIndex = tempIndex * (-1);
            } else {
                tempIndex = tempIndex;
            }

            let reversedChar = fixedKey[tempIndex];

            encrypted +=reversedChar.toUpperCase();
        } else if(isLowerCase(message[i])) {
            let reversedIndex = 0;

            let lower = message[i].toLowerCase();
            index = fixedKey.indexOf(lower);

            if(index < 0 && index >= -27) {
                reversedIndex = index * (-1);
            } else {
                reversedIndex = index;
            }

            let tempIndex = reversedIndex - 1 - 24;
            if(tempIndex < 0) {
                tempIndex = tempIndex * (-1);
            } else {
                tempIndex = tempIndex;
            }

            let reversedChar = fixedKey[tempIndex];
            encrypted += reversedChar;
        } else {
            encrypted += message[i];
        }
    }

    return encrypted;
}

function atbashcipherButtonFunction(){
    var message = document.getElementById('inputMessage').value;
    if( message == ""){
        alert("Please enter message to de ciphered/deciphered!");
        return;
      }
    var result = atbash(message);
    document.getElementById('result').value = result;
}

function atbashdecipherButtonFunction(){
    var message = document.getElementById('inputMessage').value;
    if(message == ""){
        alert("Please enter message to de ciphered/deciphered!");
        return;
      }
    var result = atbash(message);
    document.getElementById('result').value = result;
}
