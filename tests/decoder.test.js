const {decodeMorse} = require('../index');

test('decode should properly decode the morse code cipher', () => {
    expect(decodeMorse(' - . ... - .---- ', true)).toBe('test1');
});

test('decode should properly decode the morse code cipher', () => {
    expect(decodeMorse(' - . ... - .---- ...-- ')).toBe('TEST13');
});

test('decode should properly decode the morse code cipher', () => {
    expect(decodeMorse(' - . ... - .---- ...-- ', true)).toBe('test13');
});