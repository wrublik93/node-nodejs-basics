import { createUnzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';

export const decompress = async () => {
    const path = './src/zip/files';
    const gzip = createUnzip();
    const source = createReadStream(`${path}/archive.gz`);
    const dest = createWriteStream(`${path}/fileToCompress.txt`);

    await pipeline(source, gzip, dest);

    console.log('Pipeline succeeded. Check fileToCompress.txt.');
};

decompress().then();