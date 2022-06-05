import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';

export const compress = async () => {
    const path = './src/zip/files';
    const gzip = createGzip();
    const source = createReadStream(`${path}/fileToCompress.txt`);
    const dest = createWriteStream(`${path}/archive.gz`);

    pipeline(source, gzip, dest, (err) => {
        if (err) {
            console.error('Pipeline failed.', err);
            process.exitCode = 1;
        } else {
            console.log('Pipeline succeeded. Check archive.gz.')
        }
    });
};

compress().then();