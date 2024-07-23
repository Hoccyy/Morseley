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

const reversedMorseDictionary = Object.fromEntries(
    Object.entries(morseDictionary).map(([key, value]) => [value, key])
);

function encodeMorse(text, multiSpacing=false) {
    let result = '';
    while (!multiSpacing && text.includes('  ')) {
        text = text.replace('  ', ' ')
    }
    text = text.trim()
    
    for (let i = 0; i < text.length; i++) {
        result += morseDictionary[text[i].toUpperCase()] + ' ';
    }
    if (String(result).includes(undefined)) {
        throw new Error('Invalid characters detected, only input a-z, 0-9, and symbols such as !@#,$ %^&*()-')
    }
    return result.trim();
}

function decodeMorse(text, lowerCase = false) {
    let result = '';
    let charSplit = text.trim().split(' ')

    for (let m = 0; m < charSplit.length; m ++) {
        result += reversedMorseDictionary[charSplit[m]];
    }
    if (String(result).includes(undefined)) {
        throw new Error('Invalid characters detected, check your spacing or refer to the international morse code alphabet')
    }
    result = lowerCase ? (result.toLowerCase()) : result
    return result.trim()
}

module.exports = {encodeMorse, decodeMorse}