const httpClient = require('./httpClient');

const apiHostname = 'http://ccmixter.org/api/';

const buildOptions = (category) => ({
    category,
    sort: 'name',
    ord: 'asc',
    dataview: 'tags',
    f: 'jsex',
});

exports.getGenres = () => {
    const requestOptions = buildOptions('genre', {});

    return httpClient.get(apiHostname, 'query', requestOptions).then((items) => {
        return items.map((item) => ({
            name: item.tags_tag,
            songCount: parseInt(item.tags_count, 10),
        }));
    });
};

exports.getInstrumentations = () => {
    const requestOptions = buildOptions('instr', {});

    return httpClient.get(apiHostname, 'query', requestOptions).then((items) => {
        return items.map((item) => ({
            name: item.tags_tag,
            songCount: parseInt(item.tags_count, 10),
        }));
    });
};
