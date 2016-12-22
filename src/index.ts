import { post } from 'request';

const source = 'NODE';
const headers = { 'content-type': 'application/x-www-form-urlencoded' };
const url = 'http://127.0.0.1:9666/flashgot';

interface IJDownloaderForm {
    urls: string;
    source: string;
    fnames?: string;
    package?: string;
}

export interface IJDownloaderFile {
    uri: string;
    out: string;
}

export interface IJDownloaderOptions {
    files: string[] | IJDownloaderFile[];
    package?: string;
}

export async function jdownloader(options: IJDownloaderOptions) {
    const uris: string[] = [];
    const fnames: string[] = [];

    for (let o of options.files) {
        if (typeof o === 'string') {
            uris.push(o);
        } else {
            uris.push(o.uri);
            fnames.push(o.out);
        }
    }

    if (uris.length === 0) {
        let form: IJDownloaderForm = { urls: uris.join('\n'), source };
        if (fnames.length > 0) form.fnames = fnames.join('n');
        if (options.package) form.package = options.package;

        return new Promise<number>((resolve, reject) => {
            post({ headers, url, form }, (err, response, body) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(response.statusCode);
                }
            });
        });
    } else {
        return 0;
    }
}
