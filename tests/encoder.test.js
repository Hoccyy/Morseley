const {encodeMorse} = require('../index');

test('decode should properly decode the morse code cipher', () => {
    expect(encodeMorse('hOcCyy')).toBe('.... --- -.-. -.-. -.-- -.--');
});

test('decode should properly decode the morse code cipher', () => {
    expect(encodeMorse('syMbols,  test!!?', true)).toBe('... -.-- -- -... --- .-.. ... --..-- / / - . ... - -.-.-- -.-.-- ..--..');
});

test('decode should properly decode the morse code cipher', () => {
    expect(encodeMorse('multi    spaces', true)).toBe('-- ..- .-.. - .. / / / / ... .--. .- -.-. . ...');
});