const httpClient = require('./httpClient');
const querystring = require('querystring');

const apiHostname = 'http://ccmixter.org/api/';

const buildFilterParameters = (options) => {
    const params = {
        lic: options.license || 'all',
    };
    if (options.reqTags && options.reqTags.length) {
        params.reqtags = options.reqTags.join(',');
    }
    if (options.tags && options.tags.length) {
        params.tags = options.tags.join(',');
    }
    if (options.searchPhrase) {
        params.searchp = options.searchPhrase;
    }
    if (options.user) {
        params.u = options.user;
    }
    return params;
};

exports.search = (options = {}) => {
    const itemsParameters = buildFilterParameters(options);
    const countParameters = Object.assign({}, itemsParameters);

    countParameters.f = 'count';
    itemsParameters.f = 'jsex';
    itemsParameters.limit = options.limit || 10;
    itemsParameters.offset = options.offset || 0;

    const requestOptions = {
        items: querystring.stringify(itemsParameters),
        count: querystring.stringify(countParameters),
    };

    return httpClient.get(apiHostname, 'queries', requestOptions).then(result => ({
        items: result[0].items,
        totalCount: result[0].count[0],
    }));
};
