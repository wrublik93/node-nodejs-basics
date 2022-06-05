import { readdir } from 'fs/promises';

export const list = async () => {
    const path = './src/fs';
    const files = await readdir(path);

    if(!files.includes('files')) throw new Error('FS operation failed');

    const contentInFilesFolder = await readdir(`${path}/files`);

    console.log(contentInFilesFolder);
};

list().then();