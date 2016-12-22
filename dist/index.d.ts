export interface IJDownloaderOptions {
    files: string[] | {
        uri: string;
        out: string;
    }[];
    package?: string;
}
export default function jdownloader(options: IJDownloaderOptions): Promise<number>;
