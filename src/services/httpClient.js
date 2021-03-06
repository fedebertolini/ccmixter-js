const http = require('http');
const url = require('url');

exports.get = (host, pathname, queryParameters) => {
    const requestUrl = url.format({
        host,
        pathname,
        query: queryParameters,
    });

    return new Promise((resolve, reject) => {
        http.get(requestUrl, (res) => {
            const { statusCode } = res;

            if (statusCode !== 200) {
                res.resume();
                reject(new Error(`Request Failed. Status Code: ${statusCode}`));
            } else {
                res.setEncoding('utf8');
                let rawData = '';
                res.on('data', (chunk) => {
                    rawData += chunk;
                });
                res.on('end', () => {
                    try {
                        resolve(JSON.parse(rawData));
                    } catch (e) {
                        reject(new Error(`Error parsing response to JSON: ${e.message}`));
                    }
                });
                res.on('error', (e) => {
                    reject(new Error(`Error reading response: ${e.message}`));
                });
            }
        });
    });
};
