var reflector = [
  {pos: 1, reflects: 3},
  {pos: 2, reflects: 8},
  {pos: 3, reflects: 1},
  {pos: 4, reflects: 18},
  {pos: 5, reflects: 6},
  {pos: 6, reflects: 5},
  {pos: 7, reflects: 25},
  {pos: 8, reflects: 2},
  {pos: 9, reflects: 22},
  {pos: 10, reflects: 26},
  {pos: 11, reflects: 23},
  {pos: 12, reflects: 19},
  {pos: 13, reflects: 15},
  {pos: 14, reflects: 17},
  {pos: 15, reflects: 13},
  {pos: 16, reflects: 21},
  {pos: 17, reflects: 14},
  {pos: 18, reflects: 4},
  {pos: 19, reflects: 12},
  {pos: 20, reflects: 24},
  {pos: 21, reflects: 16},
  {pos: 22, reflects: 9},
  {pos: 23, reflects: 11},
  {pos: 24, reflects: 20},
  {pos: 25, reflects: 7},
  {pos: 26, reflects: 10}
];


// represents rotor 1 in enigma machine
var rotor1 = [
  {pos: 1, val: "q", next: 10},
  {pos: 2, val: "p", next: 24},
  {pos: 3, val: "o", next: 5},
  {pos: 4, val: "n", next: 7},
  {pos: 5, val: "m", next: 15},
  {pos: 6, val: "l", next: 13},
  {pos: 7, val: "k", next: 16},
  {pos: 8, val: "j", next: 18},
  {pos: 9, val: "i", next: 22},
  {pos: 10, val: "h", next: 2},
  {pos: 11, val: "g", next: 12},
  {pos: 12, val: "f", next: 14},
  {pos: 13, val: "e", next: 17},
  {pos: 14, val: "d", next: 11},
  {pos: 15, val: "c", next: 19},
  {pos: 16, val: "b", next: 21},
  {pos: 17, val: "a", next: 23},
  {pos: 18, val: "z", next: 8},
  {pos: 19, val: "y", next: 3},
  {pos: 20, val: "x", next: 1},
  {pos: 21, val: "w", next: 4},
  {pos: 22, val: "v", next: 9},
  {pos: 23, val: "u", next: 26},
  {pos: 24, val: "t", next: 6},
  {pos: 25, val: "s", next: 25},
  {pos: 26, val: "r", next: 20}
];

// represents rotor 3 in enigma machine
var rotor2 = [
  {prev: 20, pos: 1, val: "e", next: 6},
  {prev: 10, pos: 2, val: "d", next: 3},
  {prev: 19, pos: 3, val: "c", next: 16},
  {prev: 21, pos: 4, val: "b", next: 22},
  {prev: 3, pos: 5, val: "a", next: 5},
  {prev: 24, pos: 6, val: "z", next: 13},
  {prev: 4, pos: 7, val: "y", next: 10},
  {prev: 18, pos: 8, val: "x", next: 23},
  {prev: 22, pos: 9, val: "w", next: 19},
  {prev: 1, pos: 10, val: "v", next: 8},
  {prev: 14, pos: 11, val: "u", next: 24},
  {prev: 11, pos: 12, val: "t", next: 18},
  {prev: 6, pos: 13, val: "s", next: 1},
  {prev: 12, pos: 14, val: "r", next: 25},
  {prev: 5, pos: 15, val: "q", next: 15},
  {prev: 7, pos: 16, val: "p", next: 11},
  {prev: 13, pos: 17, val: "o", next: 7},
  {prev: 8, pos: 18, val: "n", next: 12},
  {prev: 15, pos: 19, val: "m", next: 17},
  {prev: 26, pos: 20, val: "l", next: 21},
  {prev: 16, pos: 21, val: "k", next: 2},
  {prev: 9, pos: 22, val: "j", next: 4},
  {prev: 17, pos: 23, val: "i", next: 26},
  {prev: 2, pos: 24, val: "h", next: 20},
  {prev: 25, pos: 25, val: "g", next: 14},
  {prev: 23, pos: 26, val: "f", next: 9}
];

// represents rotor 3 in enigma machine
var rotor3 = [
  {prev: 13, pos: 1, val: "v", next: 11},
  {prev: 21, pos: 2, val: "u", next: 26},
  {prev: 2, pos: 3, val: "t", next: 13},
  {prev: 22, pos: 4, val: "s", next: 25},
  {prev: 5, pos: 5, val: "r", next: 14},
  {prev: 1, pos: 6, val: "q", next: 24},
  {prev: 17, pos: 7, val: "p", next: 15},
  {prev: 10, pos: 8, val: "o", next: 23},
  {prev: 26, pos: 9, val: "n", next: 9},
  {prev: 7, pos: 10, val: "m", next: 1},
  {prev: 16, pos: 11, val: "l", next: 17},
  {prev: 18, pos: 12, val: "k", next: 2},
  {prev: 6, pos: 13, val: "j", next: 18},
  {prev: 25, pos: 14, val: "i", next: 6},
  {prev: 15, pos: 15, val: "h", next: 19},
  {prev: 3, pos: 16, val: "g", next: 4},
  {prev: 19, pos: 17, val: "f", next: 20},
  {prev: 12, pos: 18, val: "e", next: 7},
  {prev: 9, pos: 19, val: "d", next: 21},
  {prev: 24, pos: 20, val: "c", next: 16},
  {prev: 20, pos: 21, val: "b", next: 22},
  {prev: 4, pos: 22, val: "a", next: 3},
  {prev: 8, pos: 23, val: "z", next: 10},
  {prev: 11, pos: 24, val: "y", next: 8},
  {prev: 14, pos: 25, val: "x", next: 12},
  {prev: 23, pos: 26, val: "w", next: 5}
];

// represents input/output in enigma machine
var inOut = [
  {prev: 10, pos: 1, val: "a"},
  {prev: 12, pos: 2, val: "z"},
  {prev: 22, pos: 3, val: "y"},
  {prev: 16, pos: 4, val: "x"},
  {prev: 26, pos: 5, val: "w"},
  {prev: 14, pos: 6, val: "v"},
  {prev: 18, pos: 7, val: "u"},
  {prev: 24, pos: 8, val: "t"},
  {prev: 9, pos: 9, val: "s"},
  {prev: 23, pos: 10, val: "r"},
  {prev: 1, pos: 11, val: "q"},
  {prev: 25, pos: 12, val: "p"},
  {prev: 3, pos: 13, val: "o"},
  {prev: 5, pos: 14, val: "n"},
  {prev: 7, pos: 15, val: "m"},
  {prev: 20, pos: 16, val: "l"},
  {prev: 11, pos: 17, val: "k"},
  {prev: 13, pos: 18, val: "j"},
  {prev: 15, pos: 19, val: "i"},
  {prev: 17, pos: 20, val: "h"},
  {prev: 19, pos: 21, val: "g"},
  {prev: 21, pos: 22, val: "f"},
  {prev: 8, pos: 23, val: "e"},
  {prev: 6, pos: 24, val: "d"},
  {prev: 4, pos: 25, val: "c"},
  {prev: 2, pos: 26, val: "b"}
];


// encodes / decodes 1 character
function encodeDecodeLetter(char){
  var goTo; // this is the positon of the next component to which signal is passed
  // goes through input/output rotor 1 2 3 bounces back at reflector and goes back to input/output
  for (var i = 0; i < 26; i++) {
    if(inOut[i].val == char){
      goTo = inOut[i].prev;
    }
  }

  for (var i = 0; i < 26; i++) {
    if(rotor3[i].pos === goTo){
      goTo = parseInt(rotor3[i].prev);
      break;
    }
  }

  for (var i = 0; i < 26; i++) {
    if(rotor2[i].pos === goTo){
      goTo = parseInt(rotor2[i].prev);
      break;
    }
  }

  for (var i = 0; i < 26; i++) {
    if(rotor1[i].pos === goTo){
      goTo = parseInt(rotor1[i].pos);
      break;
    }
  }

  goTo = reflector[goTo -1].reflects;

  for (i = 0; i < 26; i++) {
    if(rotor1[i].pos == goTo){
      goTo = rotor1[i].next;
      break;
    }
  }

  for (i = 0; i < 26; i++) {
    if(rotor2[i].pos == goTo){
      goTo = rotor2[i].next;
      break;
    }
  }

  for (i = 0; i < 26; i++) {
    if(rotor3[i].pos == goTo){
      goTo = rotor3[i].next;
      break;
    }
  }

  return inOut[goTo -1].val;
}


// rotates rotor 3 by 1 position
function rotate3(){
  var inOutPrev = []; // temporary containers for data that is to be overwritten
  var rotor3prev = [];
  // getting the temporary data for the I/O
  for (i = 0; i < 26; i++) {
    if(inOut[i].prev == 26){
      inOutPrev.push(1);
    }else {
      inOutPrev.push((inOut[i].prev) + 1);
    }
  }

  // getting temporary date for the prev column in rotor3
  for (i = 0; i < 26; i++) {
    rotor3prev.push(rotor3[i].prev);
  }

  // changing posiiton of the letters and next values
  for (i = 0; i < 26; i++) {
    if(rotor3[i].next == 26){
      rotor3[i].next = 1;
    }else {
      rotor3[i].next ++;
    }
    if(rotor3[i].pos == 26){
      rotor3[i].pos = 1;
    }else {
      rotor3[i].pos ++;
    }

  }



  // adding 1 to the value of prev on rotor 3
  for (i = 0; i < 26; i++) {
    if(i == 25){
      rotor3[i].prev = parseInt(rotor3prev[0]);

    }else {
      rotor3[i].prev = parseInt(rotor3prev[i + 1]);
    }
  }
  // changing the position of the prev on inOut

  for (i = 0; i < 26; i++) {
    if(i == 0){
      inOut[i].prev = parseInt(inOutPrev[25]);
    }else {
      inOut[i].prev = parseInt(inOutPrev[i - 1]);
    }
  }

  for (var i = 0; i < 24; i++) {
    var counter = 0;
    if(rotor3[i].pos == 2){
      if(rotor3[i].val == 'v'){
        rotate2();
        console.log("2 has been triggered");
        break;
      }
    }
  }

}

// rotates rotor 2 by 1 position
function rotate2(){
  var rotor3prev = []; // temporary containers for data that is to be overwritten
  var rotor2prev = [];

  // getting the temporary data for the rotor 3 prev
  for (i = 0; i < 26; i++) {
    if(rotor3[i].prev == 26){
      rotor3prev.push(1);
    }else {
      rotor3prev.push((rotor3[i].prev) + 1);
    }
  }

  // getting temporary date for the prev column in rotor 2
  for (i = 0; i < 26; i++) {
    rotor2prev.push(rotor2[i].prev);
  }

  // changing posiiton of the letters and next values
  for (i = 0; i < 26; i++) {
    if(rotor2[i].next == 26){
      rotor2[i].next = 1;
    }else {
      rotor2[i].next ++;
    }
    if(rotor2[i].pos == 26){
      rotor2[i].pos = 1;
    }else {
      rotor2[i].pos ++;
    }

  }

  // adding 1 to the value of prev on rotor 3
  for (i = 0; i < 26; i++) {
    if(i == 25){
      rotor2[i].prev = parseInt(rotor2prev[0]);

    }else {
      rotor2[i].prev = parseInt(rotor2prev[i + 1]);
    }
  }
  // changing the position of the prev on rotor 3

  for (i = 0; i < 26; i++) {
    if(i == 0){
      rotor3[i].prev = parseInt(rotor3prev[25]);
    }else {
      rotor3[i].prev = parseInt(rotor3prev[i - 1]);
    }
  }

  for (var i = 0; i < 26; i++) {
    if(rotor2[i].pos == 2){
      if(rotor2[i].val == 'v'){
        rotate1();
        console.log("1 has been triggered");
        break;
      }
    }
  }


}

// rotates rotor 1 by 1 positon
function rotate1(){
  var rotor2prev = []; // temporary container for data that is to be overwritten

  // getting the temporary data for the rotor 2 prev
  for (i = 0; i < 26; i++) {
    if(rotor2[i].prev == 26){
      rotor2prev.push(1);
    }else {
      rotor2prev.push((rotor2[i].prev) + 1);
    }
  }


  // changing posiiton of the letters and next values
  for (i = 0; i < 26; i++) {
    if(rotor1[i].next == 26){
      rotor1[i].next = 1;
    }else {
      rotor1[i].next ++;
    }
    if(rotor1[i].pos == 26){
      rotor1[i].pos = 1;
    }else {
      rotor1[i].pos ++;
    }
  }

  // changing the position of the prev on rotor 2

  for (i = 0; i < 26; i++) {
    if(i == 0){
      rotor2[i].prev = parseInt(rotor2prev[25]);
    }else {
      rotor2[i].prev = parseInt(rotor2prev[i - 1]);
    }
  }
}

// check if provided char is a letter
function isLetter(char) {
  return char.match(/[a-z]/i);
}

// ciphers / deciphers whole sentences and returns the result
function cipherDecipher(word){
  var result= "";
  for (var i = 0; i < word.length; i++) {
    var char = word[i].toLowerCase();
    if(char == " "){
      result = result.concat(char);
      continue;
    }
    // ignores all characters which are not letters. Those will be lots in the process
    if(!isLetter(char)){
      continue;
    }
    // encodes / decodes each character and appends it to the result string
    var encodedDecoded = encodeDecodeLetter(char);
    result = result.concat(encodedDecoded);
    rotate3();
  }
  return result;
}

// sets rotor 3 to specified positon
function setRotor3(char){
  var rotate = true;
  while(rotate){
    rotor3.forEach(function(item){
      if(item.pos == 1 && item.val == char){
        rotate = false;
      }else{
        rotate3();
        rotate = false;
      }
    });
  }
  var currentPos;
  // checks the current position of the character
  rotor3.forEach(function(item){
    if(item.val == char){
      currentPos = item.pos;
    }
  });
  // calculates how many times the rotor needs to turn to get the character to position 1
  var rotate = 27 - currentPos;

  for(var i = 0; i < rotate ; i++){
    rotate3();
  }
}

// sets rotor 2 to specified positon
function setRotor2(char){
  var currentPos;
  // checks the current position of the character
  rotor2.forEach(function(item){
    if(item.val == char){
      currentPos = item.pos;
    }
  });
  // calculates how many times the rotor needs to turn to get the character to position 1
  var rotate = 27 - currentPos;

  for(var i = 0; i < rotate ; i++){
    rotate2();
  }
}

// sets rotor 3 to specified positon
function setRotor1(char){
  var currentPos;
  // checks the current position of the character
  rotor1.forEach(function(item){
    if(item.val == char){
      currentPos = item.pos;
    }
  });
  // calculates how many times the rotor needs to turn to get the character to position 1
  var rotate = 27 - currentPos;

  for(var i = 0; i < rotate ; i++){
    rotate1();
  }
}
function encriptDecriptMessage(){
  // get the rotor values entered by the user
  var r3 = document.getElementById('rotor3pos');
  var rotor3position = r3.options[r3.selectedIndex].value;
  var r2 = document.getElementById('rotor2pos');
  var rotor2position = r2.options[r2.selectedIndex].value;
  var r1 = document.getElementById('rotor1pos');
  var rotor1position = r1.options[r1.selectedIndex].value;
  // set the rotors to the values entered by the user
  setRotor3(rotor3position);
  setRotor2(rotor2position);
  setRotor1(rotor1position);

  var message = document.getElementById('inputMessage').value;

  var encripted = cipherDecipher(message);

  document.getElementById('result').value = encripted;

}

document.getElementsByClassName('enigmaButton').onclick = encriptDecriptMessage();