var encodeMessage = function (message, rows) {
    message = message.split(" ").join("");
    let fence = [];
    for (let i = 0; i < rows; i++) fence.push([])
    let rail = 0;
    let change = 1;

    for (let char of message.split("")) {
        fence[rail].push(char)
        rail += change

        if (rail === rows - 1 || rail === 0) change = -change
    }

    let r = '';
    for (let rail of fence) r += rail.join("")

    return r
}

var decodeMessage = function (message, rows) {
    let fence = [];
    for (let i = 0; i < rows; i++) fence.push([])
    let rail = 0;
    let change = 1;

    message.split("").forEach(char => {
        fence[rail].push(char)
        rail += change

        if (rail === rows - 1 || rail === 0) change = -change
    })

    const rFence = [];
    for (let i = 0; i < rows; i++) rFence.push([])

    i = 0
    let s = message.split("")
    for (r of fence) {
        for (let j = 0; j < r.length; j++) rFence[i].push(s.shift())
        i++
    }

    rail = 0
    change = 1
    var r = ""
    for (var i = 0; i < message.length; i++) {
        r += rFence[rail].shift()
        rail += change

        if (rail === rows - 1 || rail === 0) change = -change
    }

    return r;
}


// gets the message and key entered by user and ciphers it
function cipherButtonFunction(){
  var enteredKey = document.getElementById('enteredKey').value;
  var message = document.getElementById("inputMessage").value;
  if(enteredKey == "" || message == ""){
    alert("Please enter key and message to de ciphered/deciphered!");
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

  var result = decodeMessage(message, enteredKey);
  document.getElementById("result").value = result;
}