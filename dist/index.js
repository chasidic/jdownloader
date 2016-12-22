"use strict";
const tslib_1 = require("tslib");
const request_1 = require("request");
const source = 'NODE';
const headers = { 'content-type': 'application/x-www-form-urlencoded' };
const url = 'http://127.0.0.1:9666/flashgot';
function jdownloader(options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const uris = [];
        const fnames = [];
        for (let o of options.files) {
            if (typeof o === 'string') {
                uris.push(o);
            }
            else {
                uris.push(o.uri);
                fnames.push(o.out);
            }
        }
        if (uris.length > 0) {
            let form = { urls: uris.join('\n'), source };
            if (fnames.length > 0)
                form.fnames = fnames.join('\n');
            if (options.package)
                form.package = options.package;
            return new Promise((resolve, reject) => {
                request_1.post({ headers, url, form }, (err, response, body) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(response.statusCode);
                    }
                });
            });
        }
        else {
            return 0;
        }
    });
}
exports.jdownloader = jdownloader;
