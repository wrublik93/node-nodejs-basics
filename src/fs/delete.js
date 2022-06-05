import { rm, readdir } from 'fs/promises';

export const remove = async () => {
    const path = './src/fs/files';
    const files = await readdir(path);

    if(!files.includes('fileToRemove.txt')) throw new Error('FS operation failed');

    await rm(`${path}/fileToRemove.txt`);
};

remove().then();