const httpClient = require('./httpClient');

const apiHostname = 'http://ccmixter.org/api/';

exports.search = (searchPhrase) => {
    const requestOptions = {
        searchp: searchPhrase,
        dataview: 'user_basic',
        f: 'jsex',
    };

    return httpClient.get(apiHostname, 'query', requestOptions);
};
