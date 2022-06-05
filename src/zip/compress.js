import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';

export const compress = async () => {
    const path = './src/zip/files';
    const gzip = createGzip();
    const source = createReadStream(`${path}/fileToCompress.txt`);
    const dest = createWriteStream(`${path}/archive.gz`);

    await pipeline(source, gzip, dest);

    console.log('Pipeline succeeded. Check archive.gz.');
};

compress().then();