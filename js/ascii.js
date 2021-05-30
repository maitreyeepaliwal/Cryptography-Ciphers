const cipher = [' 65',' 66',' 67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122'];
const orig = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e' , 'f' , 'g' , 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function titleCase(str = '') {
    return str.toLowerCase().split(' ').map(word => {
      return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
    }).join(' ');
  }

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
    const char = split[i];
    if (/[0-9]/.test(char) || /[0-9]/.test(char)) {
      if (charGroup.length === 2) {
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