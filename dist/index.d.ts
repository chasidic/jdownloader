export interface IJDownloaderFile {
    uri: string;
    out: string;
}
export interface IJDownloaderOptions {
    files: string[] | IJDownloaderFile[];
    package?: string;
}
export declare function jdownloader(options: IJDownloaderOptions): Promise<number>;
