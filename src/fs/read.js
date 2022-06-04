import { readdir, readFile } from 'fs/promises';

export const read = async () => {
    const path = './src/fs/files';
    const files = await readdir(path);

    if(!files.includes('fileToRead.txt')) throw new Error('FS operation failed');

    const data = await readFile(`${path}/fileToRead.txt`, 'utf8');

    console.log(data);
};

read().then();