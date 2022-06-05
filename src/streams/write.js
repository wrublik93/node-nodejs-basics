import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

export const write = async () => {
    const path = './src/streams/files';
    const dest = createWriteStream(`${path}/fileToWrite.txt`, {encoding: 'utf-8'});

    await pipeline(process.stdin, dest);
};

write().then();