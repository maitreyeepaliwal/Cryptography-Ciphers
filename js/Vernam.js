const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
let out = ""
for (var i = 0; i < this; i++) {
		out += alphabet[Math.floor(Math.random() * alphabet.length)]
	}

var encodeMessage = function (message, enteredKey) {

    var output = "";
	let nText = []
	let kText = []
	for (let i of message) {
		nText.push(alphabet.indexOf(i.toLowerCase()))
	}

	for (let i of enteredKey) {
		kText.push(alphabet.indexOf(i.toLowerCase()))
	}

	for (let i in nText) {
		output += alphabet[(nText[i] + kText[i]) % 26]
	}
    
	return output;
}

var decodeMessage = function (message, enteredKey) {
    var output = "";
	let nText = []
	let kText = []
	for (let i of message) {
		nText.push(alphabet.indexOf(i.toLowerCase()))
	}
	for (let i of enteredKey) {
		kText.push(alphabet.indexOf(i.toLowerCase()))
	}
	let out = ""
	for (let i in nText) {
		output += alphabet[(nText[i] - kText[i]) < 0 ? 26 + (nText[i] - kText[i]) : (nText[i] - kText[i]) % 26]
	}
	return output;
}


// gets the message and key entered by user and ciphers it
function cipherButtonFunction(){
  var enteredKey = document.getElementById('enteredKey').value;
  var message = document.getElementById("inputMessage").value;
  if(enteredKey == "" || message == ""){
    alert("Please enter key and message to de ciphered/deciphered!");
    return;
  }

  if (message.length != enteredKey.length) {
    alert("Text and Key have to be the same length.");
    return;
}
  var result = encodeMessage(message, enteredKey);
  document.getElementById("result").value = result;


}

// gets the message and key entered by user and deciphers it
function decipherButtonFunction(){
  var enteredKey = document.getElementById('enteredKey').value;
  var message = document.getElementById("inputMessage").value;

  if(enteredKey == "" || message == ""){
    alert("Please enter key and message to de ciphered/deciphered!");
    return;
  }

  if (message.length != enteredKey.length) {
    alert("Text and Key have to be the same length.");
    return;
}
  var result = decodeMessage(message, enteredKey);
  document.getElementById("result").value = result;
}