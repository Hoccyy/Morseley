const {encodeMorse} = require('../index');

test('encodeMorse should properly decode the morse code cipher', () => {
    expect(encodeMorse('hOcCyy')).toBe('.... --- -.-. -.-. -.-- -.--');
});

test('encodeMorse should properly decode the morse code cipher', () => {
    expect(encodeMorse('syMbols,  test!!?', true)).toBe('... -.-- -- -... --- .-.. ... --..-- / / - . ... - -.-.-- -.-.-- ..--..');
});

test('encodeMorse should properly decode the morse code cipher', () => {
    expect(encodeMorse('syMbols,  test!!?', false)).toBe('... -.-- -- -... --- .-.. ... --..-- / - . ... - -.-.-- -.-.-- ..--..');
});

test('encodeMorse should properly decode the morse code cipher', () => {
    expect(encodeMorse('multi    spaces', true)).toBe('-- ..- .-.. - .. / / / / ... .--. .- -.-. . ...');
});

test('encodeMorse should throw an error when an invalid character is input', () => {
    expect(() => {
        encodeMorse('jdfkdsn%', false)
    }).toThrow('Invalid');
});