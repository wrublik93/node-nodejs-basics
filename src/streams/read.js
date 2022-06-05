import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';

export const read = async () => {
    const path = './src/streams/files';
    const source = createReadStream(`${path}/fileToRead.txt`, {encoding: 'utf-8'});

    await pipeline(source, process.stdout);
};

read().then();