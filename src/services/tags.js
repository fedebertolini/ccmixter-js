const httpClient = require('./httpClient');

const apiHostname = 'http://ccmixter.org/api/';

const buildOptions = (category, options) => ({
    category,
    sort: options.sort || 'name',
    ord: options.ord || 'asc',
    dataview: 'tags',
    f: 'jsex',
});

exports.getGenres = (options = {}) => {
    const requestOptions = buildOptions('genre', options);

    return httpClient.get(apiHostname, 'query', requestOptions).then((items) => {
        return items.map(item => ({
            name: item.tags_tag,
            songCount: parseInt(item.tags_count, 10),
        }));
    });
};

exports.getInstrumentations = (options = {}) => {
    const requestOptions = buildOptions('instr', options);

    return httpClient.get(apiHostname, 'query', requestOptions).then((items) => {
        return items.map(item => ({
            name: item.tags_tag,
            songCount: parseInt(item.tags_count, 10),
        }));
    });
};
