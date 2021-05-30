const cipher = ['01000001','01000010','01000011','01000100','01000101','01000110','01000111','01001000','01001001','01001010','01001011','01001100','01001101','01001110','01001111','01010000','01010001','01010010','01010011','01010100','01010101','01010110','01010111','01011000','01011001','01011010', '01100001', '01100010', '01100011', '01100100', '01100101', '01100110', '01100111', '01101000', '01101001', '01101010', '01101011', '01101100', '01101101', '011011110', '011011111', '01110000', '01110001', '01110010', '01110011', '01110100', '01110101', '01110110', '01110111', '01111000', '01111001', '01111010'];
const orig = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e' , 'f' , 'g' , 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var encodeMessage = function (message) {
  const final = [];
const split = message.split('');
for (let i = 0; i < split.length; i++) {
  const char = split[i];
  if (orig.includes(char)) {
    const index = orig.indexOf(char);
    final.push(cipher[index]);
  } else {
    final.push(char);
  }
}
return final.join('');
}

var decodeMessage = function (message) {
  const final = [];
const split = message.split('');
let charGroup = [];
for (let i = 0; i < split.length; i++) {
  const char = split[i]
  if (/[01]/.test(char)) {
    if (charGroup.length === 7) {
      charGroup.push(char)
      const index = cipher.indexOf(charGroup.join(''));
      final.push(orig[index]);
      charGroup = [];
    } else {
      charGroup.push(char);
    }
  } else {
    final.push(char);
  }
}
return final.join('');
}


// gets the message and key entered by user and ciphers it
function cipherButtonFunction(){
var message = document.getElementById("inputMessage").value;
if(message == ""){
  alert("Please enter message to de ciphered/deciphered!");
  return;
}

var result = encodeMessage(message);
document.getElementById("result").value = result;

}

// gets the message and key entered by user and deciphers it
function decipherButtonFunction(){
var message = document.getElementById("inputMessage").value;

if(message == ""){
  alert("Please enter message to de ciphered/deciphered!");
  return;
}

var result = decodeMessage(message);
document.getElementById("result").value = result;
}
