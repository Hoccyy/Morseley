const {decodeMorse} = require('../index');

test('decodeMorse should properly decode the morse code cipher', () => {
    expect(decodeMorse(' - . ... - .---- ', true)).toBe('test1');
});

test('decodeMorse should properly decode the morse code cipher', () => {
    expect(decodeMorse(' - . ... - .---- ...-- ')).toBe('TEST13');
});

test('decodeMorse should properly decode the morse code cipher', () => {
    expect(decodeMorse(' - . ... - .---- ...--', true)).toBe('test13');
});

test('decodeMorse should properly decode the morse code cipher', () => {
    expect(decodeMorse('.-- .... . -. //// - .... . ', true)).toBe('when the');
});

test('decodeMorse should properly decode the morse code cipher', () => {
    expect(decodeMorse('.-- .... . -. / / // - .... . ', true)).toBe('when the');
});

test('decodeMorse should throw an error upon receiving invalid characters', () => {
    expect(() => {
        decodeMorse('....... .._', false)
    }).toThrow('Invalid');
});