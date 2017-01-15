const queries = require('../src/services/songs');
const ccmixter = require('../src/ccmixter');

test('search with default parameters', () => {
    return queries.search().then((result) => {
        expect(result).toBeTruthy();
        expect(result.items.length).toBeGreaterThan(0);
        expect(result.totalCount).toBeGreaterThan(0);
    });
});

test('search items by phrase', () => {
    const params = {
        searchPhrase: 'metal',
    };
    return queries.search(params).then((result) => {
        expect(result).toBeTruthy();
        expect(result.items.length).toBeGreaterThan(0);
        expect(result.totalCount).toBeGreaterThan(0);
    });
});

test('search items by phrase and tag', () => {
    const params = {
        searchPhrase: 'rock',
        tags: ['female_vocals'],
        limit: 2
    };
    return queries.search(params).then((result) => {
        expect(result).toBeTruthy();
        expect(result.items.length).toBeGreaterThan(0);
        expect(result.totalCount).toBeGreaterThan(0);
    });
});

test('search by phrase returns less items than default params', () => {
    return Promise.all([
        queries.search(),
        queries.search({ searchPhrase: 'metal' }),
    ]).then((result) => {
        expect(result[0].totalCount).toBeGreaterThan(result[1].totalCount);
    });
});

test('search items by tag', () => {
    const params = {
        tags: ['instrumental'],
    };
    return queries.search(params).then((result) => {
        expect(result).toBeTruthy();
        expect(result.items.length).toBeGreaterThan(0);
        expect(result.totalCount).toBeGreaterThan(0);
        const allSongsHaveTag = result.items.every((song) => {
            const songTags = song.upload_extra.usertags.split(',');
            return songTags.find(tag => tag === 'instrumental');
        });
        expect(allSongsHaveTag).toBe(true);
    });
});

test('facade has searchSongs method', () => {
    expect(typeof ccmixter.searchSongs).toBe('function');
});
