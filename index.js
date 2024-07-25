const morseDictionary = {
    ' ': '/',
    'A': '.-', 
    'B': '-...', 
    'C': '-.-.', 
    'D': '-..', 
    'E': '.', 
    'F': '..-.', 
    'G': '--.', 
    'H': '....', 
    'I': '..', 
    'J': '.---', 
    'K': '-.-', 
    'L': '.-..', 
    'M': '--', 
    'N': '-.', 
    'O': '---', 
    'P': '.--.', 
    'Q': '--.-', 
    'R': '.-.', 
    'S': '...', 
    'T': '-', 
    'U': '..-', 
    'V': '...-', 
    'W': '.--', 
    'X': '-..-', 
    'Y': '-.--', 
    'Z': '--..',
    '0': '-----',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '.': '.-.-.-',
    ',': '--..--',
    '?': '..--..',
    '\'': '.----.',
    '!': '-.-.--',
    '/': '-..-.',
    '(': '-.--.',
    ')': '-.--.-',
    '&': '.-...',
    ':': '---...',
    ';': '-.-.-.',
    '=': '-...-',
    '+': '.-.-.',
    '-': '-....-',
    '_': '..--.-',
    '"': '.-..-.',
    '$': '...-..-',
    '@': '.--.-.',
}

const reversedMorseDictionary = {
    '/': ' ',
    '.-': 'A', 
    '-...': 'B', 
    '-.-.': 'C', 
    '-..': 'D', 
    '.': 'E', 
    '..-.': 'F', 
    '--.': 'G', 
    '....': 'H', 
    '..': 'I', 
    '.---': 'J', 
    '-.-': 'K', 
    '.-..': 'L', 
    '--': 'M', 
    '-.': 'N', 
    '---': 'O', 
    '.--.': 'P', 
    '--.-': 'Q', 
    '.-.': 'R', 
    '...': 'S', 
    '-': 'T', 
    '..-': 'U', 
    '...-': 'V', 
    '.--': 'W', 
    '-..-': 'X', 
    '-.--': 'Y', 
    '--..': 'Z',
    '-----': '0',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '.-.-.-': '.',
    '--..--': ',',
    '..--..': '?',
    '.----.': '\'',
    '-.-.--': '!',
    '-..-.': '/',
    '-.--.': '(',
    '-.--.-': ')',
    '.-...': '&',
    '---...': ':',
    '-.-.-.': ';',
    '-...-': '=',
    '.-.-.': '+',
    '-....-': '-',
    '..--.-': '_',
    '.-..-.': '"',
    '...-..-': '$',
    '.--.-.': '@',
};

function throwDecoderError() {
    throw new Error('Invalid characters detected, check your spacing or refer to the international morse code alphabet');
}

function throwEncoderError() {
    throw new Error('Invalid character detected, only input a-z, 0-9, and symbols such as !@#,$ %^&*()-');
}

function encodeMorse(text, multiSpacing = false) {
    let result = String();
    
    while (!multiSpacing && text.includes('  ')) {
        text = text.replace('  ', ' ').trim();
    }
    
    for (let i = 0; i < text.length; i++) {
        result += morseDictionary[text[i].toUpperCase()] + ' ';
    }
    if (String(result).includes(undefined)) {
        throwEncoderError();
    }
    return result.trim();
}

function decodeMorse(text, lowerCase = false) {
    let result = '';

    while (text.includes('//')) {
        text = text.replaceAll('//', '/');
    }

    while (text.includes('/ /')) {
        text = text.replaceAll('/ /', '/');
    }

    let charSplit = text.trim().split(' ');
    for (let m = 0; m < charSplit.length; m++) {
        result += reversedMorseDictionary[charSplit[m]];
        if (reversedMorseDictionary[charSplit[m]] == undefined) {
            throwDecoderError();
        }
    }

    result = (lowerCase ? (result.toLowerCase()) : result);
    return result.trim();
}

module.exports = { encodeMorse, decodeMorse }