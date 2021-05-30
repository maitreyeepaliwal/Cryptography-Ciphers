const cipher = ['21','22','23','31','32','33','41','42','43','51','52','53','61','62','63','71','72','73','74','81','82','83','91','92','93','94'];
const orig = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function titleCase(str = '') {
    return str.toLowerCase().split(' ').map(word => {
      return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
    }).join(' ');
  }

var encodeMessage = function (message) {
    const final = [];
  const split = message.split('');
  for (let i = 0; i < split.length; i++) {
    const char = split[i].toUpperCase();
    if (orig.includes(char)) {
      const index = orig.indexOf(char);
      final.push(cipher[index]);
    } else {
      final.push(char);
    }
  }
  return final.join('');
}

var decodeMessage = function (message,isTitleCase = true) {
    const final = [];
  const split = message.split('');
  let charGroup = [];
  for (let i = 0; i < split.length; i++) {
    const char = split[i].toUpperCase();
    if (/[1-9]/.test(char)) {
      if (charGroup.length === 1) {
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

  var result = decodeMessage(message, false);
  document.getElementById("result").value = result;
}