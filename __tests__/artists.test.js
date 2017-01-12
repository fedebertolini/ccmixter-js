const artists = require('../src/services/artists');
const ccmixter = require('../src/ccmixter');

test('search artists by default params', () => {
    return artists.search().then((result) => {
        expect(result).toBeTruthy();
        expect(result.length).toBeGreaterThan(0);
    });
});

test('facade has searchArtists method', () => {
    expect(typeof ccmixter.searchArtists).toBe('function');
});
