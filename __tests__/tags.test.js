const tags = require('../src/services/tags');
const ccmixter = require('../src/ccmixter');

test('get genre tags', () => {
    return tags.getGenres().then((result) => {
        expect(result).toBeTruthy();
        expect(result.length).toBeGreaterThan(0);
        expect(result[0].name).toBeTruthy();
    });
});

test('get instrumentation tags', () => {
    return tags.getInstrumentations().then((result) => {
        expect(result).toBeTruthy();
        expect(result.length).toBeGreaterThan(0);
        expect(result[0].name).toBeTruthy();
    });
});

test('facade has getGenres method', () => {
    expect(typeof ccmixter.getGenres).toBe('function');
});

test('facade has getInstrumentations method', () => {
    expect(typeof ccmixter.getInstrumentations).toBe('function');
});
