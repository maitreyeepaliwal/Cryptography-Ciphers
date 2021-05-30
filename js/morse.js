const map = [
    {
        key: '0',
        letter: '0',
        morse: '----'
    },
    {
        key: '1',
        letter: '1',
        morse: '.----'
    },
    {
        key: '2',
        letter: '2',
        morse: '..---'
    },
    {
        key: '3',
        letter: '3',
        morse: '...--'
    },
    {
        key: '4',
        letter: '4',
        morse: '....-'
    },
    {
        key: '5',
        letter: '5',
        morse: '.....'
    },
    {
        key: '6',
        letter: '6',
        morse: '-....'
    },
    {
        key: '7',
        letter: '7',
        morse: '--...'
    },
    {
        key: '8',
        letter: '8',
        morse: '---..'
    },
    {
        key: '9',
        letter: '9',
        morse: '----.'
    },
    {
        key: 'a',
        letter: 'a',
        morse: '.-'
    },
    {
        key: 'b',
        letter: 'b',
        morse: '-...'
    },
    {
        key: 'c',
        letter: 'c',
        morse: '-.-.'
    },
    {
        key: 'd',
        letter: 'd',
        morse: '-..'
    },
    {
        key: 'e',
        letter: 'e',
        morse: '.'
    },
    {
        key: 'f',
        letter: 'f',
        morse: '..-.'
    },
    {
        key: 'g',
        letter: 'g',
        morse: '--.'
    },
    {
        key: 'h',
        letter: 'h',
        morse: '....'
    },
    {
        key: 'i',
        letter: 'i',
        morse: '..'
    },
    {
        key: 'j',
        letter: 'j',
        morse: '.---'
    },
    {
        key: 'k',
        letter: 'k',
        morse: '-.-'
    },
    {
        key: 'l',
        letter: 'l',
        morse: '.-..'
    },
    {
        key: 'm',
        letter: 'm',
        morse: '--'
    },
    {
        key: 'n',
        letter: 'n',
        morse: '-.'
    },
    {
        key: 'o',
        letter: 'o',
        morse: '---'
    },
    {
        key: 'p',
        letter: 'p',
        morse: '.--.'
    },
    {
        key: 'q',
        letter: 'q',
        morse: '--.-'
    },
    {
        key: 'r',
        letter: 'r',
        morse: '.-.'
    },
    {
        key: 's',
        letter: 's',
        morse: '...'
    },
    {
        key: 't',
        letter: 't',
        morse: '-'
    },
    {
        key: 'u',
        letter: 'u',
        morse: '..-'
    },
    {
        key: 'v',
        letter: 'v',
        morse: '...-'
    },
    {
        key: 'w',
        letter: 'w',
        morse: '.--'
    },
    {
        key: 'x',
        letter: 'x',
        morse: '-..-'
    },
    {
        key: 'y',
        letter: 'y',
        morse: '-.--'
    },
    {
        key: 'z',
        letter: 'z',
        morse: '--..'
    },
    {
        key: 'space',
        letter: ' ',
        morse: '/'
    },
]

var encodeMessage = function (string) {
    let morseCode = '';
    const newString = string.toLowerCase();

    for(let i = 0; i < newString.length; i++) {
        for(let j = 0; j < map.length; j++) {
            if(newString.charAt(i) === map[j].letter) {
                morseCode += (map[j].morse + ' ');
            }
        }
    }
    
    return morseCode;
}

var decodeMessage = function (morseCode) {
    let string = '';
    let morseSplit = morseCode.split(' ');

    for(let i = 0; i < morseSplit.length; i++) {
        for(let j = 0; j < map.length; j++) {
            if(morseSplit[i] === map[j].morse) {
                string += map[j].letter;
            }
        }
    }
    
    return string;
}


// gets the message and key entered by user and ciphers it
function cipherButtonFunction() {
    var message = document.getElementById("inputMessage").value;
    if (message == "") {
        alert("Please enter message to de ciphered/deciphered!");
        return;
    }

    var result = encodeMessage(message);
    document.getElementById("result").value = result;

}

// gets the message and key entered by user and deciphers it
function decipherButtonFunction() {
    var message = document.getElementById("inputMessage").value;

    if (message == "") {
        alert("Please enter message to de ciphered/deciphered!");
        return;
    }

    var result = decodeMessage(message);
    document.getElementById("result").value = result;
}